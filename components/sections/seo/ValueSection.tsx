import ValueSection from "../shared/ValueSection";

export default function SEOValueSection() {
  return (
    <ValueSection
        heading={<>High-Quality SEO With Full Transparency</>}
        subtitle="We pride ourselves on doing SEO the right way, which means straight talk, no shortcuts, and crystal-clear results."
        cards={[
            {
            id: "usa-based-seo-team",
            icon: "/svg/values/seo/1.svg",
            title: "100% USA-Based SEO Team",
            text: "Headquartered in Michigan with talented SEO team members all over the USA ready to serve you.",
            },
            {
            id: "roi-focused-seo",
            icon: "/svg/values/seo/2.svg",
            title: "ROI-Focused SEO Reporting",
            text: "Rankings, traffic, and leads are great, but are you making more money? You'll know with us.",
            },
            {
            id: "midwest-values",
            icon: "/svg/values/seo/3.svg",
            title: "Midwest Values",
            text: "We work hard and do what we say without any fast talking or games to provide you the best experience.",
            },
            {
            id: "thousands-of-keywords",
            icon: "/svg/values/seo/4.svg",
            title: "Thousands Of Page 1 Keywords",
            text: "We've ranked hundreds of thousands of high-value keywords on the first page of Google.",
            },
            {
            id: "white-hat-google-compliant",
            icon: "/svg/values/seo/5.svg",
            title: "White Hat & Google Compliant",
            text: "Unlike others who are unethically motivated to use bad strategies, our SEO is safe and effective.",
            },
            {
            id: "custom-content-that-converts",
            icon: "/svg/values/seo/6.svg",
            title: "Custom Content That Converts",
            text: "The SEO content we create is personalized for your target audience and optimized to convert.",
            },
        ]}
        />
    ); 
}