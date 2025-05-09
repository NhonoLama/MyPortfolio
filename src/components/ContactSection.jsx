import { Facebook, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use_toast";
import { useState } from "react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Messaege Sent!",
        description: "Thank you for the message. I will get back to you soon!",
      });
      setIsSubmitting(false);
    }, 1000);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30 ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text:4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Have a project to be completed with full satisfactory result? I am
          here to provide that.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information:
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="text-primary h-6  w-6 " />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:wadalama111@gmail.com"
                    className="text-muted-foreground hover: text-primary transition-colors duration-300"
                  >
                    wadalama111@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="text-primary h-6  w-6 " />
                </div>
                <div>
                  <h4 className="font-medium">Phone Number</h4>
                  <a
                    href="tel:+9779869415953"
                    className="text-muted-foreground hover: text-primary transition-colors duration-300"
                  >
                    +977-9869415953
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="text-primary h-6  w-6 " />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover: text-primary transition-colors duration-300">
                    Kathmandu,Nepal
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/dawa-lama111/">
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.facebook.com/dawa.lama.419986/"
                  target="_blank"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form action="" onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Dawa Lama...."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus-ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="dawalama@gmail.com...."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus-ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Hello! I like you...."
                  className="w-full resize-none px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus-ring-primary"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button cursor-pointer w-[60%] mx-auto  flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
