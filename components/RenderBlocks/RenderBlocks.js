import dynamic from 'next/dynamic'


//I mport Blocks
const AcfHeroHome = dynamic({
    loader: () => import('../../wp-blocks/AcfHeroHome')
})
const AcfSlider = dynamic({
    loader: () => import('../../wp-blocks/AcfSlider')
})
const AcfProvideSolutions = dynamic({
    loader: () => import('../../wp-blocks/AcfProvideSolutions')
})
const AcfTextImageBlock = dynamic({
    loader: () => import('../../wp-blocks/AcfTextImageBlock')
})
const AcfPartners = dynamic({
    loader: () => import('../../wp-blocks/AcfPartners')
})
const AcfCaseStudies = dynamic({
    loader: () => import('../../wp-blocks/AcfCaseStudies')
})
const AcfArticles = dynamic({
    loader: () => import('../../wp-blocks/AcfArticles')
})
const AcfTestimonials = dynamic({
    loader: () => import('../../wp-blocks/AcfTestimonials')
})
const AcfGravityForm = dynamic({
    loader: () => import('../../wp-blocks/AcfGravityForm')
})
const AcfHero = dynamic({
    loader: () => import('../../wp-blocks/AcfHero')
})
const AcfClients = dynamic({
    loader: () => import('../../wp-blocks/AcfClients')
})
const AcfHeroSingleClients = dynamic({
    loader: () => import('../../wp-blocks/AcfHeroSingleClients')
})
const AcfSingleClientsContent = dynamic({
    loader: () => import('../../wp-blocks/AcfSingleClientsContent')
})



export default function RenderBlocks({data,postIcon, clients}) {
    return (
        <>
            {
                data.map((block,index) => {
                    switch(block.__typename) {
                        case 'AcfHeroHome':
                            return <div key={index}> <AcfHeroHome data={block} /> </div>
                        case 'AcfSlider':
                            return <div key={index}> <AcfSlider data={block} /> </div>
                        case 'AcfProvideSolutions':
                            return <div key={index}> <AcfProvideSolutions data={block} /> </div>
                        case 'AcfTextImageBlock':
                            return <div key={index}> <AcfTextImageBlock data={block} /> </div>
                        case 'AcfPartners':
                            return <div key={index}> <AcfPartners data={block} /> </div>
                        case 'AcfCaseStudies':
                            return <div key={index}> <AcfCaseStudies data={block} /> </div>
                        case 'AcfArticles':
                            return <div key={index}> <AcfArticles data={block} /> </div>
                        case 'AcfTestimonials':
                            return <div key={index}> <AcfTestimonials data={block} /> </div>
                        case 'AcfGravityForm' :
                            return <div key={index}> <AcfGravityForm data={block} /> </div>
                        case 'AcfHero' :
                            return <div key={index}> <AcfHero data={block} /> </div>
                        case 'AcfClients':
                            return <div key={index}> <AcfClients clients={clients}/> </div>
                        case 'AcfHeroSingleClients':
                            return <div key={index}> <AcfHeroSingleClients postIcon={postIcon} data={block} /> </div>
                        case 'AcfSingleClientsContent':
                            return <div key={index}> <AcfSingleClientsContent data={block} /> </div>
                        default:
                            return <div></div>
                    }
                })

            }
        </>
    );
}
