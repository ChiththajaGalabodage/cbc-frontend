import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

export default function TestPage() {
  const [image, setImage] = useState(null);

  const url = "https://cschwfhbuvxlegdggmsu.supabase.co";
  const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzY2h3ZmhidXZ4bGVnZGdnbXN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4ODc0MjksImV4cCI6MjA2MjQ2MzQyOX0.tKzAshkDhdz9LODu4iXW9DJCQK3FeY3bZTjLcZY6kmU";

  const supabase = createClient(url, key);

  function fileUpload() {
    supabase.storage
      .from("images")
      .upload(image.name, image, {
        upsert: false,
        cacheControl: "3600",
      })
      .then(() => {
        const publicUrl = supabase.storage
          .from("images")
          .getPublicUrl(image.name).data.publicUrl;
        console.log(publicUrl);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="w-full h-screen  flex justify-center items-center">
      <input
        type="file"
        className="file-input file-input-bordered w-full max-w-xs"
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
      />

      <button
        onClick={fileUpload}
        className="bg-green-500 text-white font-bold py-2 px-4 rounded"
      >
        Upload
      </button>
    </div>
  );
}
