import React, { useState } from "react";

export default function Test() {
 const [searchTerm, setSearchTerm] = useState("");
 const [imageK, setImageK] = useState<string | null>(null); // Store the image file
 const [imageD, setImaged] = useState(null);

 const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
   const reader = new FileReader();
   reader.onloadend = () => {
    setImageK(reader.result as string); // Store as Base64 string
   };
   reader.readAsDataURL(file);
  }
 };

 const handleSubmit = async (event) => {
  event.preventDefault();

  // Prepare image data if it exists

  console.log(imageK);
  const response = await fetch(`/api/image`, {
   method: "POST",

   body: JSON.stringify({ searchTerm, imageK }), // Include imageData if present
  });

  if (!response.ok) {
   // Handle error response
   console.error("API request failed:", response.status);
   // You might want to show an error message to the user here
   return;
  }

  // Assuming the response is JSON, parse it
  const data = await response.json();

  // Use the data as needed
  console.log(data);
  // For example, you might want to update the state or display the data in the UI
 };

 return (
  <form onSubmit={handleSubmit}>
   <input type="file" onChange={handleImageChange} />
   {/*<img src={imageK} alt="" />*/}
   <input
    type="text"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
   />
   <pre className="TEX">{JSON.stringify(imageD, null, 2)}</pre>
   <button type="submit">Search</button>
  </form>
 );
}

//   body: JSON.stringify({ searchTerm }),
//  });
////  console.log(response.body);
//  if (!response.ok) {
//   console.error("API request failed:", response.status);
//   // Handle the error here
//   return;
//  }

//  const data = await response.json();
//  console.log(data);
// };
