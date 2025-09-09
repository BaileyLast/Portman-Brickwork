import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Phone, Mail, MapPin, Clock, Tag, Shield, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();
  const [selectedProjectType, setSelectedProjectType] = useState<string>("");

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      projectType: "",
      projectDescription: "",
      preferredContactMethod: "email",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Thank you for your inquiry!",
        description: data.message,
      });
      form.reset();
      setSelectedProjectType("");
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get Your Free Quote Today</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your bricklaying project? Contact us for a free consultation and detailed quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card shadow-lg section-fade">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Request a Quote</h3>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      {...form.register("fullName")}
                      placeholder="John Smith"
                      data-testid="input-fullname"
                    />
                    {form.formState.errors.fullName && (
                      <p className="text-destructive text-sm mt-1">{form.formState.errors.fullName.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...form.register("phone")}
                      placeholder="(123) 456-7890"
                      data-testid="input-phone"
                    />
                    {form.formState.errors.phone && (
                      <p className="text-destructive text-sm mt-1">{form.formState.errors.phone.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register("email")}
                    placeholder="john@example.com"
                    data-testid="input-email"
                  />
                  {form.formState.errors.email && (
                    <p className="text-destructive text-sm mt-1">{form.formState.errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="projectType">Project Type</Label>
                  <Select 
                    value={selectedProjectType} 
                    onValueChange={(value) => {
                      setSelectedProjectType(value);
                      form.setValue("projectType", value);
                    }}
                  >
                    <SelectTrigger data-testid="select-projecttype">
                      <SelectValue placeholder="Select a service..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential Bricklaying</SelectItem>
                      <SelectItem value="commercial">Commercial Projects</SelectItem>
                      <SelectItem value="repairs">Repairs & Restoration</SelectItem>
                      <SelectItem value="structural">Structural Work</SelectItem>
                      <SelectItem value="decorative">Decorative Brickwork</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="projectDescription">Project Description *</Label>
                  <Textarea
                    id="projectDescription"
                    {...form.register("projectDescription")}
                    rows={4}
                    placeholder="Please describe your project in detail, including size, timeline, and any specific requirements..."
                    data-testid="textarea-description"
                  />
                  {form.formState.errors.projectDescription && (
                    <p className="text-destructive text-sm mt-1">{form.formState.errors.projectDescription.message}</p>
                  )}
                </div>
                
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg h-auto"
                  disabled={contactMutation.isPending}
                  data-testid="button-submit"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Quote Request"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 section-fade">
            <Card className="bg-card shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4" data-testid="contact-phone">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <p className="text-muted-foreground">(123) 456-7890</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri: 7:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4" data-testid="contact-email">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground">info@braintreebricklaying.com</p>
                      <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4" data-testid="contact-location">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Service Area</h4>
                      <p className="text-muted-foreground">Essex, Suffolk & East Anglia</p>
                      <p className="text-sm text-muted-foreground">Within 25 miles radius</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">Emergency Only</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Shield className="text-primary h-5 w-5" />
                    <span className="text-sm">Fully Insured & Protected</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="text-primary h-5 w-5" />
                    <span className="text-sm">Expertise Since 1976</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Tag className="text-primary h-5 w-5" />
                    <span className="text-sm">Free Quotes & Estimates</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
