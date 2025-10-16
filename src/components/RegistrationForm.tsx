import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, User, Mail, School, Code, Briefcase, Users, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ElectricBorder } from "./ElectricBorder";

interface RegistrationFormProps {
  onBack: () => void;
}

export function RegistrationForm({ onBack }: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    institution: "",
    experience: "",
    track: "",
    teamSize: "",
    why: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Registration submitted! We'll be in touch soon.");
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-purple-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-purple-300 hover:text-purple-200 hover:bg-purple-500/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
      </motion.header>

      {/* Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Register for STARTER
            </h1>
            <p className="text-xl text-purple-300/80">
              Fill out the form below to secure your spot at the hackathon
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ElectricBorder color="#8b5cf6">
              <div className="bg-gradient-to-br from-purple-950/80 to-purple-900/40 backdrop-blur-xl p-8 md:p-12 rounded-2xl">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-purple-300 mb-4">
                      <User className="w-5 h-5" />
                      <h2 className="text-xl font-bold">Personal Information</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-purple-200">First Name *</Label>
                        <ElectricBorder color="#8b5cf6">
                          <Input
                            id="firstName"
                            required
                            value={formData.firstName}
                            onChange={(e) => handleChange("firstName", e.target.value)}
                            className="bg-purple-950/50 border-0 text-purple-100 placeholder:text-purple-400/50 rounded-2xl"
                            placeholder="John"
                          />
                        </ElectricBorder>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-purple-200">Last Name *</Label>
                        <ElectricBorder color="#8b5cf6">
                          <Input
                            id="lastName"
                            required
                            value={formData.lastName}
                            onChange={(e) => handleChange("lastName", e.target.value)}
                            className="bg-purple-950/50 border-0 text-purple-100 placeholder:text-purple-400/50 rounded-2xl"
                            placeholder="Doe"
                          />
                        </ElectricBorder>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-purple-200 flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email Address *
                      </Label>
                      <ElectricBorder color="#8b5cf6">
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          className="bg-purple-950/50 border-0 text-purple-100 placeholder:text-purple-400/50 rounded-2xl"
                          placeholder="john.doe@example.com"
                        />
                      </ElectricBorder>
                    </div>
                  </div>

                  {/* Academic/Professional Info */}
                  <div className="space-y-6 pt-6 border-t border-purple-500/20">
                    <div className="flex items-center gap-2 text-purple-300 mb-4">
                      <School className="w-5 h-5" />
                      <h2 className="text-xl font-bold">Background</h2>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="institution" className="text-purple-200">School/University or Company *</Label>
                      <ElectricBorder color="#8b5cf6">
                        <Input
                          id="institution"
                          required
                          value={formData.institution}
                          onChange={(e) => handleChange("institution", e.target.value)}
                          className="bg-purple-950/50 border-0 text-purple-100 placeholder:text-purple-400/50 rounded-2xl"
                          placeholder="Your institution"
                        />
                      </ElectricBorder>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience" className="text-purple-200 flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        Experience Level *
                      </Label>
                      <ElectricBorder color="#8b5cf6">
                        <Select value={formData.experience} onValueChange={(value) => handleChange("experience", value)}>
                          <SelectTrigger className="bg-purple-950/50 border-0 text-purple-100 rounded-2xl">
                            <SelectValue placeholder="Select your experience level" />
                          </SelectTrigger>
                          <SelectContent className="bg-purple-950 border-purple-500/30">
                            <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                            <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                            <SelectItem value="advanced">Advanced (3-5 years)</SelectItem>
                            <SelectItem value="expert">Expert (5+ years)</SelectItem>
                          </SelectContent>
                        </Select>
                      </ElectricBorder>
                    </div>
                  </div>

                  {/* Hackathon Preferences */}
                  <div className="space-y-6 pt-6 border-t border-purple-500/20">
                    <div className="flex items-center gap-2 text-purple-300 mb-4">
                      <Briefcase className="w-5 h-5" />
                      <h2 className="text-xl font-bold">Hackathon Details</h2>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="track" className="text-purple-200">Preferred Track *</Label>
                      <ElectricBorder color="#8b5cf6">
                        <Select value={formData.track} onValueChange={(value) => handleChange("track", value)}>
                          <SelectTrigger className="bg-purple-950/50 border-0 text-purple-100 rounded-2xl">
                            <SelectValue placeholder="Choose a track" />
                          </SelectTrigger>
                          <SelectContent className="bg-purple-950 border-purple-500/30">
                            <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                            <SelectItem value="web3">Web3 & Blockchain</SelectItem>
                            <SelectItem value="climate">Climate Tech</SelectItem>
                            <SelectItem value="health">HealthTech</SelectItem>
                            <SelectItem value="fintech">FinTech</SelectItem>
                            <SelectItem value="open">Open Innovation</SelectItem>
                          </SelectContent>
                        </Select>
                      </ElectricBorder>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="teamSize" className="text-purple-200 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Team Preference *
                      </Label>
                      <ElectricBorder color="#8b5cf6">
                        <Select value={formData.teamSize} onValueChange={(value) => handleChange("teamSize", value)}>
                          <SelectTrigger className="bg-purple-950/50 border-0 text-purple-100 rounded-2xl">
                            <SelectValue placeholder="Select team preference" />
                          </SelectTrigger>
                          <SelectContent className="bg-purple-950 border-purple-500/30">
                            <SelectItem value="solo">Solo (Just me)</SelectItem>
                            <SelectItem value="has-team">I have a team</SelectItem>
                            <SelectItem value="looking">Looking for teammates</SelectItem>
                          </SelectContent>
                        </Select>
                      </ElectricBorder>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="why" className="text-purple-200">Why do you want to join STARTER? *</Label>
                      <ElectricBorder color="#8b5cf6">
                        <Textarea
                          id="why"
                          required
                          value={formData.why}
                          onChange={(e) => handleChange("why", e.target.value)}
                          className="bg-purple-950/50 border-0 text-purple-100 placeholder:text-purple-400/50 rounded-2xl min-h-32"
                          placeholder="Tell us what excites you about this hackathon..."
                        />
                      </ElectricBorder>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-6 text-lg shadow-lg shadow-purple-500/50"
                    >
                      Submit Registration
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                    <p className="text-center text-sm text-purple-400/60 mt-4">
                      By submitting, you agree to our terms and conditions
                    </p>
                  </div>
                </form>
              </div>
            </ElectricBorder>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
