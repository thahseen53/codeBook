import { Accordian } from "./Accordian";

export const Faq = () => {
    const faqs = [
        {
          "id": 1,
          "question": "Why should I use CodeBook?",
          "answer": "if you're interested in programming and software development .CodeBook can be a great resource for you to find and purchase relevant books."
        },
        {
          "id": 2,
          "question": "Can I access my eBook on mobile?",
          "answer": "You can easily access your ebook on a mobile devices such as smartphone or tablet.Most ebooks are available in formats that can be read on mobile devices.such as pdf or epub"
        },
        {
          "id": 3,
          "question": "Do you offer refunds?",
          "answer": "we do offer 30-day return policy.you can contact our customer support team and they will be happy to assist you with return process"
        },
        {
          "id": 4,
          "question": "Do you support Internation payments?",
          "answer": "Yes codebook does support international payments.if you have questions or concerns about payment please contact our customer support team"
        }
    ];
    
  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">        
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Question in mind?</h1>    
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                   {faqs.map(faq=><Accordian key={faq.id} faq={faq}/>)}
            </div>
      </section>
  )
}