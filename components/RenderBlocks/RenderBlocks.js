import dynamic from 'next/dynamic'

//Import Blocks
export default function RenderBlocks({data,postIcon,clients,industries,clientID,blog,categories,socialMedia, type}) {
    return (
        <>
            {
                data.map((block,index) => {
                    switch(block.__typename) {
                        case 'AcfHeroHome':
                            const AcfHeroHome = dynamic({
                                loader: () => import('../../wp-blocks/AcfHeroHome')
                            })

                            return <div key={index}> <AcfHeroHome data={block} /> </div>
                        case 'AcfSlider':
                            const AcfSlider = dynamic({
                                loader: () => import('../../wp-blocks/AcfSlider')
                            })
                            return <div key={index}> <AcfSlider data={block} /> </div>
                        case 'AcfProvideSolutions':
                            const AcfProvideSolutions = dynamic({
                                loader: () => import('../../wp-blocks/AcfProvideSolutions')
                            })
                            return <div key={index}> <AcfProvideSolutions data={block} /> </div>
                        case 'AcfTextImageBlock':
                            const AcfTextImageBlock = dynamic({
                                loader: () => import('../../wp-blocks/AcfTextImageBlock')
                            })
                            return <div key={index}> <AcfTextImageBlock data={block} /> </div>
                        case 'AcfPartners':
                            const AcfPartners = dynamic({
                                loader: () => import('../../wp-blocks/AcfPartners')
                            })
                            return <div key={index}> <AcfPartners data={block} /> </div>
                        case 'AcfCaseStudies':
                            const AcfCaseStudies = dynamic({
                                loader: () => import('../../wp-blocks/AcfCaseStudies')
                            })
                            return <div key={index}> <AcfCaseStudies data={block} /> </div>
                        case 'AcfArticles':
                            const AcfArticles = dynamic({
                                loader: () => import('../../wp-blocks/AcfArticles')
                            })
                            return <div key={index}> <AcfArticles data={block} /> </div>
                        case 'AcfTestimonials':
                            const AcfTestimonials = dynamic({
                                loader: () => import('../../wp-blocks/AcfTestimonials')
                            })
                            return <div key={index}> <AcfTestimonials data={block} /> </div>
                        case 'AcfGravityForm':
                            const AcfGravityForm = dynamic({
                                loader: () => import('../../wp-blocks/AcfGravityForm')
                            })
                            return <div key={index}> <AcfGravityForm data={block} /> </div>
                        case 'AcfHero':
                            const AcfHero = dynamic({
                                loader: () => import('../../wp-blocks/AcfHero')
                            })
                            return <div key={index}> <AcfHero data={block} /> </div>
                        case 'AcfClients':
                            const AcfClients = dynamic({
                                loader: () => import('../../wp-blocks/AcfClients')
                            })
                            return <div key={index}> <AcfClients clients={clients} /> </div>
                        case 'AcfHeroSingleClients':
                            const AcfHeroSingleClients = dynamic({
                                loader: () => import('../../wp-blocks/AcfHeroSingleClients')
                            })
                            return <div key={index}> <AcfHeroSingleClients postIcon={postIcon} industries={industries} data={block} /> </div>
                        case 'AcfSingleClientsContent':
                            const AcfSingleClientsContent = dynamic({
                                loader: () => import('../../wp-blocks/AcfSingleClientsContent')
                            })
                            return <div key={index}> <AcfSingleClientsContent data={block}/> </div>
                        case 'AcfSingleClientsColumns':
                            const AcfSingleClientsColumns = dynamic({
                                loader: () => import('../../wp-blocks/AcfSingleClientsColumns')
                            })
                            return <div key={index}> <AcfSingleClientsColumns data={block}/> </div>
                        case 'AcfSingleClientsTestimonial':
                            const AcfSingleClientsTestimonial = dynamic({
                                loader: () => import('../../wp-blocks/AcfSingleClientsTestimonial')
                            })
                            return <div key={index}> <AcfSingleClientsTestimonial postIcon={postIcon} data={block} /> </div>
                        case 'AcfLargeImage':
                            const AcfLargeImage = dynamic({
                                loader: () => import('../../wp-blocks/AcfLargeImage')
                            })
                            return <div key={index}> <AcfLargeImage data={block} /> </div>
                        case 'AcfLatestClients':
                            const AcfLatestClients = dynamic({
                                loader: () => import('../../wp-blocks/AcfLatestClients')
                            })
                            return <div key={index}> <AcfLatestClients clientID={clientID} /> </div>
                        case 'AcfListImages':
                            const AcfListImages = dynamic({
                                loader: () => import('../../wp-blocks/AcfListImages')
                            })
                            return <div key={index}> <AcfListImages data={block} /> </div>
                        case 'AcfSchedule':
                            const AcfSchedule = dynamic({
                                loader: () => import('../../wp-blocks/AcfSchedule')
                            })
                            return <div key={index}> <AcfSchedule data={block} /> </div>
                        case 'AcfFaq':
                            const AcfFaq = dynamic({
                                loader: () => import('../../wp-blocks/AcfFaq')
                            })
                            return <div key={index}> <AcfFaq data={block} /> </div>
                        case 'AcfMap':
                            const AcfMap = dynamic({
                                loader: () => import('../../wp-blocks/AcfMap')
                            })
                            return <div key={index}> <AcfMap data={block} /> </div>
                        case 'AcfCoreValues':
                            const AcfCoreValues = dynamic({
                                loader: () => import('../../wp-blocks/AcfCoreValues')
                            })
                            return <div key={index}> <AcfCoreValues data={block} /> </div>
                        case 'AcfCareers':
                            const AcfCareers = dynamic({
                                loader: () => import('../../wp-blocks/AcfCareers')
                            })
                            return <div key={index}> <AcfCareers data={block} /> </div>
                        case 'AcfCards':
                            const AcfCards = dynamic({
                                loader: () => import('../../wp-blocks/AcfCards')
                            })
                            return <div key={index}> <AcfCards data={block} /> </div>
                        case 'AcfBlogs':
                            const AcfBlog = dynamic({
                                loader: () => import('../../wp-blocks/AcfBlog')
                            })
                            return <div key={index}> <AcfBlog blog={blog} /> </div>
                        case 'AcfBlogContent':
                            const AcfBlogContent = dynamic({
                                loader: () => import('../../wp-blocks/AcfBlogContent')
                            })
                            return <div key={index}> <AcfBlogContent data={block} categories={categories} socialMedia={socialMedia} type={type}/> </div>
                        default:
                            return <div key={index}></div>
                    }
                })

            }
        </>
    );
}
