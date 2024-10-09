import { Card, CardContent } from "@/components/ui/card"

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
}

function Testimonial({ quote, author, title }: TestimonialProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <p className="italic text-gray-600 mb-2">"{quote}"</p>
        <p className="font-semibold">- {author}, {title}</p>
      </CardContent>
    </Card>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      quote: "SECULAR has been a game-changer for our boutique. Their designs consistently attract new customers and keep our regulars coming back for more.",
      author: "Sarah Johnson",
      title: "Owner of Chic Boutique"
    },
    {
      quote: "The quality and uniqueness of SECULAR's collections make them a standout brand in our department store. Their commitment to sustainability aligns perfectly with our values.",
      author: "Michael Chen",
      title: "Buyer at Nordstrom"
    }
  ];

  return (
    <div className="bg-white rounded-lg p-4 mt-4 shadow">
      <h2 className="text-2xl font-semibold mb-4">Stockist Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
}