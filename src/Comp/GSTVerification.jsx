// import React, { useState } from 'react';
// import { Button, ButtonGroup } from '@chakra-ui/react'

// function GSTVerification() {
//   const [gstNumber, setGstNumber] = useState('');
//   const [gstData, setGstData] = useState(null);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleInputChange = (e) => {
//     setGstNumber(e.target.value);
//   };

//   const fetchGSTData = async () => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       // Replace this with your actual GST API endpoint
//       const response = await fetch(`https://your-gst-api.com/verify?gstNumber=${gstNumber}`);
//       const data = await response.json();
//       setGstData(data);
//     } catch (error) {
//       setError('Error verifying GSTIN number. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>GST Verification</h1>
//       <div>
//         <label>Enter GSTIN Number:</label>
//         <input type="text" value={gstNumber} onChange={handleInputChange} />
//         <Button onClick={fetchGSTData} colorScheme='blue'>Verify</Button>
//       </div>
//       {isLoading && <p>Loading...</p>}
//       {error && <p>{error}</p>}
//       {gstData && (
//         <div>
//           <h2>Verified Information</h2>
//           <p>Business Name: {gstData.businessName}</p>
//           <p>Address: {gstData.address}</p>
//           <p>GSTIN Status: {gstData.status}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default GSTVerification;
