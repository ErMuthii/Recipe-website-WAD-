import React from "react";
import { Divider, Card, Input, Button } from "@nextui-org/react"; // Import NextUI components for styling

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-[#087EB8] text-3xl font-bold mb-4">Contact Us</h1>
      <Divider className="my-4" />
      <Card className="p-4">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold">
              Name
            </label>
            <Input
              id="name"
              variant="underlined"
              name="name"
              placeholder="Enter your name"
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-semibold">
              Email Address
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              variant="underlined"
              placeholder="Enter your email address"
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-semibold">
              Message
            </label>
            <Input
              id="message"
              name="message"
              rows="4"
              variant="underlined"
              placeholder="Enter your message"
              className="w-full"
            />
          </div>
          <Button onClick={handleSubmit} color="primary">
            Send Message
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Contact;
