import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, Calendar, Mail, Clock, DollarSign, Loader2 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { cn } from '../components/ui/utils';
import { supabase } from '../lib/supabase';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../components/ui/breadcrumb';

export function ContactPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '',
    budget: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const clearError = (field: string) => {
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleNext = () => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    if (step === 1) {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
        isValid = false;
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
        isValid = false;
      }
    }
    
    if (step === 2) {
      if (!formData.type) {
        newErrors.type = 'Please select a project type';
        isValid = false;
      }
    }

    if (!isValid) {
      setErrors(newErrors);
      toast.error("Please fill in the required fields");
      return;
    }

    nextStep();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    let isValid = true;

    if (!formData.budget) {
       newErrors.budget = 'Please select a budget range';
       isValid = false;
    }
    if (!formData.message.trim()) {
       newErrors.message = 'Please provide project details';
       isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      toast.error("Please fill in the required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            project_type: formData.type,
            budget: formData.budget,
            message: formData.message
          }
        ]);

      if (error) throw error;

      nextStep();
      toast.success('Message sent successfully!');
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message: ' + (error.message || 'Unknown error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Contact</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 text-black">Let's start a project.</h1>
          <p className="text-xl text-black/60">
            Tell me about your vision. I typically reply within 48 hours.
          </p>
        </motion.div>

        <div className="bg-[#FAFAFA] border border-black/5 rounded-3xl p-8 md:p-12 overflow-hidden relative min-h-[500px] flex flex-col justify-between">
          
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 h-1 bg-black/5 w-full">
            <motion.div 
              className="h-full bg-black"
              initial={{ width: "25%" }}
              animate={{ width: `${step * 25}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1 flex flex-col justify-center"
              >
                <h3 className="text-2xl font-bold mb-8 text-black">First, what's your name and email?</h3>
                <div className="space-y-6">
                   <div className="space-y-2">
                     <Label className="text-black/60">Your Name</Label>
                     <Input 
                       placeholder="John Doe" 
                       className={cn(
                         "bg-white border-black/10 h-14 text-lg focus:border-black transition-colors text-black",
                         errors.name && "border-red-500 focus:border-red-500"
                       )}
                       value={formData.name}
                       onChange={(e) => {
                         setFormData({...formData, name: e.target.value});
                         clearError('name');
                       }}
                     />
                     {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                   </div>
                   <div className="space-y-2">
                     <Label className="text-black/60">Email Address</Label>
                     <Input 
                       placeholder="john@company.com" 
                       type="email"
                       className={cn(
                         "bg-white border-black/10 h-14 text-lg focus:border-black transition-colors text-black",
                         errors.email && "border-red-500 focus:border-red-500"
                       )}
                       value={formData.email}
                       onChange={(e) => {
                         setFormData({...formData, email: e.target.value});
                         clearError('email');
                       }}
                     />
                     {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                   </div>
                </div>
                <div className="mt-12 flex justify-end">
                   <Button onClick={handleNext} size="lg" className="rounded-full px-8 bg-black text-white hover:bg-black/90">
                     Next <ArrowRight className="ml-2 w-4 h-4" />
                   </Button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1 flex flex-col justify-center"
              >
                <h3 className="text-2xl font-bold mb-8 text-black">What type of project is this?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Product Design", "Web Design", "Design System", "Mobile App", "Branding", "Consultation"].map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setFormData({...formData, type});
                        clearError('type');
                      }}
                      className={cn(
                        "p-4 rounded-xl border text-left transition-all duration-200",
                        formData.type === type 
                          ? "bg-black border-black text-white" 
                          : "bg-white border-black/10 text-black hover:border-black/30",
                        errors.type && !formData.type && "border-red-300 bg-red-50/50"
                      )}
                    >
                      <span className="font-medium text-lg">{type}</span>
                    </button>
                  ))}
                </div>
                {errors.type && <p className="text-red-500 text-sm mt-2">{errors.type}</p>}
                <div className="mt-12 flex justify-between">
                   <Button variant="ghost" onClick={prevStep} className="text-black/60 hover:text-black hover:bg-transparent">Back</Button>
                   <Button onClick={handleNext} size="lg" className="rounded-full px-8 bg-black text-white hover:bg-black/90">
                     Next <ArrowRight className="ml-2 w-4 h-4" />
                   </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1 flex flex-col justify-center"
              >
                <h3 className="text-2xl font-bold mb-8 text-black">Almost done. Any details?</h3>
                <div className="space-y-6">
                   <div className="space-y-2">
                     <Label className="text-black/60">Estimated Budget (USD)</Label>
                     <select 
                        className={cn(
                          "w-full bg-white border border-black/10 h-14 rounded-md px-3 text-lg focus:outline-none focus:border-black transition-colors text-black",
                          errors.budget && "border-red-500 focus:border-red-500"
                        )}
                        value={formData.budget}
                        onChange={(e) => {
                          setFormData({...formData, budget: e.target.value});
                          clearError('budget');
                        }}
                     >
                       <option value="">Select a range</option>
                       <option value="5-10k">$5k - $10k</option>
                       <option value="10-25k">$10k - $25k</option>
                       <option value="25-50k">$25k - $50k</option>
                       <option value="50k+">$50k+</option>
                     </select>
                     {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
                   </div>
                   <div className="space-y-2">
                     <Label className="text-black/60">Project Details</Label>
                     <Textarea 
                       placeholder="Tell me about the goals, timeline, and any specific requirements..." 
                       className={cn(
                         "bg-white border-black/10 min-h-[120px] text-lg focus:border-black transition-colors resize-none text-black",
                         errors.message && "border-red-500 focus:border-red-500"
                       )}
                       value={formData.message}
                       onChange={(e) => {
                         setFormData({...formData, message: e.target.value});
                         clearError('message');
                       }}
                     />
                     {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                   </div>
                </div>
                <div className="mt-12 flex justify-between">
                   <Button variant="ghost" onClick={prevStep} className="text-black/60 hover:text-black hover:bg-transparent">Back</Button>
                   <Button 
                     onClick={handleSubmit} 
                     disabled={isSubmitting}
                     size="lg" 
                     className="rounded-full px-8 bg-black text-white hover:bg-black/90"
                   >
                     {isSubmitting ? (
                       <>
                         <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                         Sending...
                       </>
                     ) : (
                       "Send Request"
                     )}
                   </Button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex-1 flex flex-col justify-center items-center text-center py-12"
              >
                <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-8">
                  <Check className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-black">Message Sent!</h3>
                <p className="text-black/60 text-xl max-w-md mb-8">
                  Thanks for reaching out, {formData.name}. I've received your inquiry and will get back to you within 48 hours.
                </p>
                <Button asChild size="lg" variant="outline" className="border-black/20 text-black hover:bg-black/5 rounded-full">
                  <Link to="/">Back to Home</Link>
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=alrafikhandoker7@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center p-6 bg-white border border-black/10 rounded-2xl shadow-sm hover:border-black transition-colors cursor-pointer"
          >
            <Mail className="w-8 h-8 text-black mb-4" />
            <h4 className="font-bold mb-2 text-black">Email Me</h4>
            <p className="text-black/60">alrafikhandoker7@gmail.com</p>
          </a>
          <div className="flex flex-col items-center text-center p-6 bg-white border border-black/10 rounded-2xl shadow-sm">
            <Calendar className="w-8 h-8 text-black mb-4" />
            <h4 className="font-bold mb-2 text-black">Book a Call</h4>
            <p className="text-black/60">Calendly Available</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white border border-black/10 rounded-2xl shadow-sm">
            <Clock className="w-8 h-8 text-black mb-4" />
            <h4 className="font-bold mb-2 text-black">Working Hours</h4>
            <p className="text-black/60">Mon-Fri, 9am - 6pm EST</p>
          </div>
        </div>
      </div>
    </div>
  );
}
