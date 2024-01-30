import dynamic from 'next/dynamic'


//Import Blocks
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
const AcfSingleClientsTestimonial = dynamic({
    loader: () => import('../../wp-blocks/AcfSingleClientsTestimonial')
})
const AcfLargeImage = dynamic({
    loader: () => import('../../wp-blocks/AcfLargeImage')
})
const AcfLatestClients = dynamic({
    loader: () => import('../../wp-blocks/AcfLatestClients')
})
const AcfListImages = dynamic({
    loader: () => import('../../wp-blocks/AcfListImages')
})
const AcfSchedule = dynamic({
    loader: () => import('../../wp-blocks/AcfSchedule')
})
const AcfFaq = dynamic({
    loader: () => import('../../wp-blocks/AcfFaq')
})
const AcfMap = dynamic({
    loader: () => import('../../wp-blocks/AcfMap')
})
const AcfCoreValues = dynamic({
    loader: () => import('../../wp-blocks/AcfCoreValues')
})
const AcfCareers = dynamic({
    loader: () => import('../../wp-blocks/AcfCareers')
})
const AcfCards = dynamic({
    loader: () => import('../../wp-blocks/AcfCards')
})



export default function RenderBlocks({data,postIcon,clients,industries,latestClients}) {
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
                            return <div key={index}> <AcfHeroSingleClients postIcon={postIcon} industries={industries} data={block} /> </div>
                        case 'AcfSingleClientsContent':
                            return <div key={index}> <AcfSingleClientsContent data={block} /> </div>
                        case 'AcfSingleClientsTestimonial':
                            return <div key={index}> <AcfSingleClientsTestimonial postIcon={postIcon}  data={block} /> </div>
                        case 'AcfLargeImage':
                            return <div key={index}> <AcfLargeImage data={block} /> </div>
                        case 'AcfLatestClients':
                            return <div key={index}> <AcfLatestClients latestClients={latestClients} /> </div>
                        case 'AcfListImages':
                            return <div key={index}> <AcfListImages data={block} /> </div>
                        case 'AcfSchedule':
                            return <div key={index}> <AcfSchedule data={block} /> </div>
                        case 'AcfFaq':
                            return <div key={index}> <AcfFaq data={block} /> </div>
                        case 'AcfMap':
                            return <div key={index}> <AcfMap data={block} /> </div>
                        case 'AcfCoreValues':
                            return <div key={index}> <AcfCoreValues data={block} /> </div>
                        case 'AcfCareers':
                            return <div key={index}> <AcfCareers data={block} /> </div>
                        case 'AcfCards':
                            return <div key={index}> <AcfCards data={block} /> </div>
                        default:
                            return <div key={index}></div>
                    }
                })

            }
        </>
    );
}
