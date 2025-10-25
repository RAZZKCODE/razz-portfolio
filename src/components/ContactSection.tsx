import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Globe, Send, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { db } from "../firebase";  // <-- apni firebase file ka path
import { collection, addDoc, Timestamp } from "firebase/firestore";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Save form data to Firestore
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: Timestamp.now(),
      });

      toast({
        title: "✅ Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error saving message: ", error);
      toast({
        title: "❌ Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }

    setLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "rajveerkushwah15032004@gmail.com",
      link: "mailto:rajveerkushwah15032004@gmail.com",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Agra, Uttar Pradesh, India",
      link: "#",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Languages",
      value: "Hindi, English",
      link: "#",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Availability",
      value: "Open to opportunities",
      link: "#",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can help you
            achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Let's Connect
              </h3>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects.
                Whether you have a question, want to collaborate, or just want to
                say hello, feel free to reach out!
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={info.title}
                  className="glass-card p-6 hover:shadow-glow transition-all duration-300 interactive-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center">
                    <div
                      className={`p-3 rounded-full bg-gradient-to-r ${info.color} text-white mr-4`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{info.title}</h4>
                      <p className="text-foreground/80">{info.value}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <Card className="glass-card p-6">
              <h4 className="text-xl font-semibold text-primary mb-4">
                Ready to Work Together?
              </h4>
              <p className="text-foreground/80 mb-4">
                I'm available for full-time positions, freelance projects, and
                collaborative opportunities.
              </p>
              <Button
                variant="premium"
                onClick={() =>
                  window.open("mailto:rajveerkushwah15032004@gmail.com", "_blank")
                }
                className="w-full"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email Directly
              </Button>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass-card p-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Send Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="glass-card"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="glass-card"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Discussion"
                  required
                  className="glass-card"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or how I can help you..."
                  rows={6}
                  required
                  className="glass-card resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="premium"
                size="lg"
                className="w-full text-lg py-6"
                disabled={loading}
              >
                <Send className="w-5 h-5 mr-2" />
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
