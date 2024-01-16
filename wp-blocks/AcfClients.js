import React,{useState,useEffect} from 'react'
import {useQuery,gql} from '@apollo/client';
import Link from 'next/link';
import Image from "next/future/image";

export default function AcfClients(props) {

    const {data} = useQuery(GET_POST);

    const [clients,setClients] = useState([])
    const [isLoading,setIsLoading] = useState(true)


    useEffect(() => {
        setIsLoading(true)

        if(data) {
            setClients(data?.clients.nodes)
            setIsLoading(false)
        }
    },[data])

    //console.log(clients);
    return (
        <section>
            <div className="max-w-[1440px] w-full px-[20px] lg:px-[120px] pt-[80px] lg:pt-[120px] pb-[60px] lg:pb-[110px]">
                <div className="flex flex-row flex-wrap lg:justify-center mb-0 lg:mb-[85px]">
                    {
                        isLoading ? <div key="loading" className='loading loadingDiv'>Loading...</div> : <>
                            {
                                clients.map((client,index) => {
                                    const icon = client?.clients?.icon?.node?.sourceUrl
                                    const image = client?.featuredImage?.node.sourceUrl
                                    return <div key={index} className="blog-card w-full lg:w-[33.3%] px-[7px] mb-[22px] rounded-[10px] relative">
                                        <div className="rounded-[10px] h-full">
                                            <div className="thumbnail rounded-t-[10px]">
                                                <Link href={client.link}>
                                                    <a className=" cursor-pointer" >
                                                        <Image
                                                            src={image}
                                                            width={600}
                                                            height={0}
                                                            style={{width: '100%',height: '380px'}} // optional
                                                            className={'rounded-t-[10px], object-cover'}
                                                            alt="Picture of the author"
                                                        />
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="h-[140px] px-[30px] rounded-b-[10px] flex justify-between items-center card-content" style={{background: 'linear-gradient(152deg, #3F3F3F 6.9%, #232323 86.09%), #FAFAFA'}}>
                                                <div className="w-[113px] card-logo">
                                                    <Link href={client.link}>
                                                        <a className="cursor-pointer">
                                                            <Image
                                                                src={icon}
                                                                width={120}
                                                                height={0}
                                                                style={{width: '100%',height: 'auto'}} // optional
                                                                className={'rounded-t-[10px] object-cover'}
                                                                alt="Picture of the author"
                                                            />
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="view_more_containers">
                                                    <Link href={client.link}>
                                                        <a className="read-article cursor-pointer flex text-primary text-[16px] " >
                                                            View More
                                                            <Image
                                                                src={require('../assets/images/arrow-right-blue.svg')}
                                                                width={21}
                                                                height={25}
                                                                style={{}} // optional
                                                                alt="Picture of the author"
                                                            />
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </>
                    }
                </div>
            </div>
        </section>
    );
}



//Query to get POSTS
const GET_POST = gql`
query clients {
   clients {
    nodes {
      link
      clients {
        icon {
          node {
            sourceUrl
          }
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
}
`