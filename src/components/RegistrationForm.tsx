import { motion } from "motion/react";
import { useState, useCallback, memo, ReactNode } from "react";
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

const emailLabel = (
  <span className="flex items-center gap-2">
    <Mail className="w-4 h-4" />
    Email Address *
  </span>
);

const experienceLabel = (
  <span className="flex items-center gap-2">
    <Code className="w-4 h-4" />
    Experience Level *
  </span>
);

const teamLabel = (
  <span className="flex items-center gap-2">
    <Users className="w-4 h-4" />
    Team Preference *
  </span>
);

const EXPERIENCE_OPTIONS = [
  { value: "beginner", label: "Beginner (0-1 years)" },
  { value: "intermediate", label: "Intermediate (1-3 years)" },
  { value: "advanced", label: "Advanced (3-5 years)" },
  { value: "expert", label: "Expert (5+ years)" },
];

const TRACK_OPTIONS = [
  { value: "ai-ml", label: "AI & Machine Learning" },
  { value: "web3", label: "Web3 & Blockchain" },
  { value: "climate", label: "Climate Tech" },
  { value: "health", label: "HealthTech" },
  { value: "fintech", label: "FinTech" },
  { value: "open", label: "Open Innovation" },
];

const TEAM_SIZE_OPTIONS = [
  { value: "solo", label: "Solo (Just me)" },
  { value: "has-team", label: "I have a team" },
  { value: "looking", label: "Looking for teammates" },
];

// ⚡ Bolt Optimization: Memoized input wrapper to prevent re-rendering all fields on every keystroke.
interface TextInputFieldProps {
  field: string;
  label: string | ReactNode;
  value: string;
  onChange: (field: string, value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  color?: string;
}

const TextInputField = memo(({ field, label, value, onChange, placeholder, type = "text", required, color }: TextInputFieldProps) => (
  <div className="space-y-2">
    <Label htmlFor={field} className="text-purple-200">{label}</Label>
    <ElectricBorder variant="minimal" color={color}>
      <Input
        id={field}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(field, e.target.value)}
        className="bg-purple-950/50 border-0 text-purple-100 placeholder:text-purple-400/50 rounded-2xl"
        placeholder={placeholder}
      />
    </ElectricBorder>
  </div>
));

// ⚡ Bolt Optimization: Memoized select wrapper to prevent unnecessary re-renders.
interface SelectFieldProps {
  field: string;
  label: ReactNode;
  value: string;
  onChange: (field: string, value: string) => void;
  options: { value: string; label: string }[];
  placeholder: string;
  color?: string;
}

const SelectField = memo(({ field, label, value, onChange, options, placeholder, color }: SelectFieldProps) => (
  <div className="space-y-2">
    <Label htmlFor={field} className="text-purple-200">{label}</Label>
    <ElectricBorder color={color || "#8b5cf6"} variant="minimal">
      <Select value={value} onValueChange={(val) => onChange(field, val)}>
        <SelectTrigger className="bg-purple-950/50 border-0 text-purple-100 rounded-2xl">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="bg-purple-950 border-purple-500/30">
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </ElectricBorder>
  </div>
));

// ⚡ Bolt Optimization: Memoized textarea wrapper.
interface TextareaFieldProps {
  field: string;
  label: ReactNode;
  value: string;
  onChange: (field: string, value: string) => void;
  placeholder?: string;
  required?: boolean;
  color?: string;
}

const TextareaField = memo(({ field, label, value, onChange, placeholder, required, color }: TextareaFieldProps) => (
  <div className="space-y-2">
    <Label htmlFor={field} className="text-purple-200">{label}</Label>
    <ElectricBorder color={color || "#8b5cf6"} variant="minimal">
      <Textarea
        id={field}
        required={required}
        value={value}
        onChange={(e) => onChange(field, e.target.value)}
        className="bg-purple-950/50 border-0 text-purple-100 placeholder:text-purple-400/50 rounded-2xl min-h-32"
        placeholder={placeholder}
      />
    </ElectricBorder>
  </div>
));

// ⚡ Bolt Optimization: Moved form state down into its own component.
// This prevents the parent RegistrationForm (which contains heavy animated headers
// and ElectricBorder wrappers) from re-rendering on every keystroke.
function RegistrationInnerForm() {
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

  const handleChange = useCallback((field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Personal Information */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-purple-300 mb-4">
          <User className="w-5 h-5" />
          <h2 className="text-xl font-bold">Personal Information</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <TextInputField
            field="firstName"
            label="First Name *"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="John"
          />

          <TextInputField
            field="lastName"
            label="Last Name *"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Doe"
          />
        </div>

        <TextInputField
          field="email"
          label={emailLabel}
          value={formData.email}
          onChange={handleChange}
          type="email"
          required
          placeholder="john.doe@example.com"
          color="#8b5cf6"
        />
      </div>

      {/* Academic/Professional Info */}
      <div className="space-y-6 pt-6 border-t border-purple-500/20">
        <div className="flex items-center gap-2 text-purple-300 mb-4">
          <School className="w-5 h-5" />
          <h2 className="text-xl font-bold">Background</h2>
        </div>

        <TextInputField
          field="institution"
          label="School/University or Company *"
          value={formData.institution}
          onChange={handleChange}
          required
          placeholder="Your institution"
          color="#8b5cf6"
        />

        <SelectField
          field="experience"
          label={experienceLabel}
          value={formData.experience}
          onChange={handleChange}
          options={EXPERIENCE_OPTIONS}
          placeholder="Select your experience level"
          color="#8b5cf6"
        />
      </div>

      {/* Hackathon Preferences */}
      <div className="space-y-6 pt-6 border-t border-purple-500/20">
        <div className="flex items-center gap-2 text-purple-300 mb-4">
          <Briefcase className="w-5 h-5" />
          <h2 className="text-xl font-bold">Hackathon Details</h2>
        </div>

        <SelectField
          field="track"
          label="Preferred Track *"
          value={formData.track}
          onChange={handleChange}
          options={TRACK_OPTIONS}
          placeholder="Choose a track"
          color="#8b5cf6"
        />

        <SelectField
          field="teamSize"
          label={teamLabel}
          value={formData.teamSize}
          onChange={handleChange}
          options={TEAM_SIZE_OPTIONS}
          placeholder="Select team preference"
          color="#8b5cf6"
        />

        <TextareaField
          field="why"
          label="Why do you want to join STARTER? *"
          value={formData.why}
          onChange={handleChange}
          placeholder="Tell us what excites you about this hackathon..."
          required
          color="#8b5cf6"
        />
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
  );
}

export function RegistrationForm({ onBack }: RegistrationFormProps) {
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
            {/* Main wrapper uses default variant */}
            <ElectricBorder>
              <div className="bg-gradient-to-br from-purple-950/80 to-purple-900/40 backdrop-blur-xl p-8 md:p-12 rounded-2xl">
                <RegistrationInnerForm />
              </div>
            </ElectricBorder>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
