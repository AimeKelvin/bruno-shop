
import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import { User, Mail, MapPin, Phone, Save, CreditCard, Package, Heart, LogOut, Camera } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const profileSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  bio: z.string().optional(),
});

// Mock orders data
const orders = [
  {
    id: "ORD-1234",
    date: "March 12, 2024",
    status: "Delivered",
    total: "$129.99",
    items: [
      { id: 1, name: "Elegant Dress", price: "$89.99", quantity: 1 },
      { id: 2, name: "Silk Scarf", price: "$40.00", quantity: 1 }
    ]
  },
  {
    id: "ORD-1235",
    date: "February 28, 2024",
    status: "Processing",
    total: "$75.50",
    items: [
      { id: 3, name: "Designer Handbag", price: "$75.50", quantity: 1 }
    ]
  }
];

// Mock wishlist data
const wishlist = [
  { id: 1, name: "Gold Necklace", price: "$120.00", image: "https://placehold.co/100x120" },
  { id: 2, name: "Cashmere Sweater", price: "$150.00", image: "https://placehold.co/100x120" },
  { id: 3, name: "Leather Boots", price: "$200.00", image: "https://placehold.co/100x120" }
];

const Profile: React.FC = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("account");
  
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "Jane Doe",
      email: "jane.doe@example.com",
      phone: "+1 (555) 123-4567",
      address: "123 Elegance Street",
      city: "Fashion City",
      state: "Style State",
      zipCode: "12345",
      bio: "Fashion enthusiast with a love for elegant designs and timeless pieces.",
    },
  });

  function onSubmit(values: z.infer<typeof profileSchema>) {
    // In a real app, this would update the user's profile
    console.log(values);
    
    toast({
      title: "Profile updated",
      description: "Your profile information has been saved.",
    });
  }

  return (
    <Layout>
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[250px_1fr]">
          {/* Sidebar */}
          <div className="hidden md:block">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <div className="h-24 w-24 overflow-hidden rounded-full bg-elegant-beige">
                      <img
                        src="https://placehold.co/200x200"
                        alt="Profile"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <Button 
                      size="icon"
                      variant="outline"
                      className="absolute bottom-0 right-0 h-8 w-8 rounded-full"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="text-center">
                    <h3 className="font-medium">{form.watch("name")}</h3>
                    <p className="text-sm text-muted-foreground">{form.watch("email")}</p>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <nav className="space-y-2">
                  <Button 
                    variant={activeTab === "account" ? "default" : "ghost"} 
                    className="w-full justify-start"
                    onClick={() => setActiveTab("account")}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Account
                  </Button>
                  <Button 
                    variant={activeTab === "orders" ? "default" : "ghost"} 
                    className="w-full justify-start"
                    onClick={() => setActiveTab("orders")}
                  >
                    <Package className="mr-2 h-4 w-4" />
                    Orders
                  </Button>
                  <Button 
                    variant={activeTab === "wishlist" ? "default" : "ghost"} 
                    className="w-full justify-start"
                    onClick={() => setActiveTab("wishlist")}
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    Wishlist
                  </Button>
                  <Button 
                    variant={activeTab === "payments" ? "default" : "ghost"} 
                    className="w-full justify-start"
                    onClick={() => setActiveTab("payments")}
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Payment Methods
                  </Button>
                  
                  <Separator className="my-4" />
                  
                  <Button variant="destructive" className="w-full justify-start">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>
          
          {/* Mobile View Tabs */}
          <div className="md:hidden">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="account">
                  <User className="h-4 w-4 md:mr-2" />
                  <span className="hidden md:inline">Account</span>
                </TabsTrigger>
                <TabsTrigger value="orders">
                  <Package className="h-4 w-4 md:mr-2" />
                  <span className="hidden md:inline">Orders</span>
                </TabsTrigger>
                <TabsTrigger value="wishlist">
                  <Heart className="h-4 w-4 md:mr-2" />
                  <span className="hidden md:inline">Wishlist</span>
                </TabsTrigger>
                <TabsTrigger value="payments">
                  <CreditCard className="h-4 w-4 md:mr-2" />
                  <span className="hidden md:inline">Payments</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          {/* Main Content */}
          <div className="space-y-6">
            {activeTab === "account" && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle>Account Information</CardTitle>
                    <CardDescription>
                      Update your personal information
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid gap-6 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input 
                                      placeholder="John Doe" 
                                      className="pl-10" 
                                      {...field} 
                                    />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input 
                                      placeholder="example@email.com" 
                                      className="pl-10" 
                                      {...field} 
                                    />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input 
                                      placeholder="+1 (555) 123-4567" 
                                      className="pl-10" 
                                      {...field} 
                                    />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="bio"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Bio</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Tell us about yourself" 
                                  className="min-h-[100px]" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <Separator />
                        
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">Address Information</h3>
                          
                          <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Street Address</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input 
                                      placeholder="123 Elegance Street" 
                                      className="pl-10" 
                                      {...field} 
                                    />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <div className="grid gap-6 sm:grid-cols-3">
                            <FormField
                              control={form.control}
                              name="city"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>City</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="Fashion City" 
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="state"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>State/Province</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="Style State" 
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="zipCode"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Zip/Postal Code</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="12345" 
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <Button type="submit" className="gap-2">
                            <Save className="h-4 w-4" /> 
                            Save Changes
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>
                      Change your password
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline">Change Password</Button>
                  </CardContent>
                </Card>
              </>
            )}
            
            {activeTab === "orders" && (
              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                  <CardDescription>
                    View and manage your past orders
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <Collapsible key={order.id} className="border rounded-md overflow-hidden">
                        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left">
                          <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-2">
                            <div>
                              <p className="text-sm font-medium">Order ID</p>
                              <p className="text-sm">{order.id}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Date</p>
                              <p className="text-sm">{order.date}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Status</p>
                              <p className="text-sm">{order.status}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Total</p>
                              <p className="text-sm">{order.total}</p>
                            </div>
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <Separator />
                          <div className="p-4 space-y-4">
                            <h4 className="font-medium">Order Items</h4>
                            <div className="space-y-2">
                              {order.items.map((item) => (
                                <div key={item.id} className="flex justify-between">
                                  <div className="flex-1">
                                    <p className="text-sm font-medium">{item.name}</p>
                                    <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                                  </div>
                                  <p className="text-sm">{item.price}</p>
                                </div>
                              ))}
                            </div>
                            <Separator />
                            <div className="flex justify-between">
                              <p className="font-medium">Total:</p>
                              <p className="font-medium">{order.total}</p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">View Details</Button>
                              <Button variant="outline" size="sm">Track Package</Button>
                            </div>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
            
            {activeTab === "wishlist" && (
              <Card>
                <CardHeader>
                  <CardTitle>Wishlist</CardTitle>
                  <CardDescription>
                    Items you've saved for later
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {wishlist.map((item) => (
                      <div key={item.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                        <div className="flex items-center space-x-4">
                          <div className="h-20 w-16 overflow-hidden rounded-md bg-elegant-beige">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">{item.price}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Add to Cart</Button>
                          <Button variant="ghost" size="icon">
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
            
            {activeTab === "payments" && (
              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                  <CardDescription>
                    Manage your saved payment methods
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-4">
                    <div className="rounded-md border p-4 flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <div className="bg-elegant-beige/50 p-2 rounded-md">
                          <CreditCard className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">Visa ending in 4242</p>
                          <p className="text-sm text-muted-foreground">Expires 04/2025</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="ghost" size="sm" className="text-destructive">Remove</Button>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="gap-2">
                      <Plus className="h-4 w-4" />
                      Add Payment Method
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
