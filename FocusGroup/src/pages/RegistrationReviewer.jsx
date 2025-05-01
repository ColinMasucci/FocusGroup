import React, { useState } from "react";
import { Card, Button, TextField, CardContent } from '@mui/material';

const RegistrationReviewer = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    industry: "",
    website: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Company Registration:", formData);
    // Add your API submission logic here
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <Card>
        <CardContent className="space-y-4">
          <h2 className="text-2xl font-bold">Company Registration</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              {/* <Label htmlFor="companyName">Company Name</Label> */}
              <TextField id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required />
            </div>
            <div>
              {/* <Label htmlFor="contactName">Contact Name</Label> */}
              <TextField id="contactName" name="contactName" value={formData.contactName} onChange={handleChange} required />
            </div>
            <div>
              {/* <Label htmlFor="email">Email</Label> */}
              <TextField id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              {/* <Label htmlFor="phone">Phone Number</Label> */}
              <TextField id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
            </div>
            <div>
              {/* <Label htmlFor="industry">Industry</Label> */}
              <TextField id="industry" name="industry" value={formData.industry} onChange={handleChange} />
            </div>
            <div>
              {/* <Label htmlFor="website">Website</Label> */}
              <TextField id="website" name="website" value={formData.website} onChange={handleChange} />
            </div>
            <div>
              {/* <Label htmlFor="description">Brief Description</Label> */}
              <textarea
                id="description"
                name="description"
                className="w-full border border-gray-300 rounded-md p-2"
                rows={4}
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" className="w-full">Register</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationReviewer;
