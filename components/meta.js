import { Component } from 'react';

class Meta extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const SEO = {
            title: 'Melvor Mastery Calculator',
            description: "Calculate time and material requirements to max a skill's mastery in Melvor Idle.",
            image: "https://raw.githubusercontent.com/rschlemer/mastery-calculator/main/public/index.png"
        };
        console.log(SEO.image)
        return (
            <>
                <meta name="description" content={SEO.description} />

                {/* Open Graph */}
                <meta property="og:title" content={SEO.title} />
                <meta property="og:description" content={SEO.description} />
                <meta property="og:image" content={SEO.image} />
                <meta property="og:url" content="/" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="/" />
                <meta property="twitter:url" content="/" />
                <meta name="twitter:title" content={SEO.title} />
                <meta name="twitter:description" content={SEO.description} />
                <meta name="twitter:image" content={SEO.image} />
            </>
        )
    }
}

export { Meta }