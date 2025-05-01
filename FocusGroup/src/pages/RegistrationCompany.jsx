import React, { useState } from "react";
import { Card, Button, CardContent } from '@mui/material';
import FormTextField from "../components/FormTextField";

const RegistrationCompany = () => {
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
    <div className="w-full flex justify-center p-5 bg-gray-100">
      <Card className="w-110">
        <CardContent className="space-y-4">
          <h2 className="text-center text-4xl mb-10 font-bold">Company Registration</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <FormTextField
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    label="Company Name"
                    onChange={handleChange}
                    required
                />

            </div>
            <div>
                <FormTextField
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    label="Contact Name"
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <FormTextField
                    id="email"
                    name="email"
                    value={formData.email}
                    label="Email"
                    onChange={handleChange}
                    required
                    type="email"
                />
            </div>
            <div>
                <FormTextField
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    label="Phone Number"
                    onChange={handleChange}
                    required
                    type="tel"
                />
            </div>
            <div>
                <FormTextField
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    label="Industry"
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <FormTextField
                    id="website"
                    name="website"
                    value={formData.website}
                    label="Website (Optional)"
                    onChange={handleChange}
                />
            </div>
            <div>
              <h2 className="font-bold">Give a quick bio description so Reviewers can get excited about your company! (You can change this later at any time.)</h2>
              <textarea
                id="description"
                name="description"
                className="w-full border border-gray-300 rounded-md p-2"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                placeholder="(Optional)"
              />
            </div>
            <Button 
                type="submit" 
                className="w-full"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#FF5733',
                  color: 'white',
                  '&:hover': { backgroundColor: '#C70039', color: "white" }
                }}>   
                Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationCompany;
