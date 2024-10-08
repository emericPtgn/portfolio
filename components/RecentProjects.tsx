import { projects } from "@/data"
import { PinContainer } from "./ui/3d-pin"
import { FaLocationArrow } from "react-icons/fa"
import Image from "next/image"

const RecentProjects = () => {
  return (
    <div className="py-20" id="projets">
        <h1 className="heading">
          Mes derniers { ' ' }
          <span className="text-purple">projets</span>
        </h1>

        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
          {projects.map((item) => (

            <div key={item.id} 
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center w-[80vw] sm:w-[570px]"
            >
              <PinContainer title={item.link} href={item.link} >
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden lg:h-[30vh] mb-10 sm:h-[40vh] h-[30vh]">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}>
                    <Image src='/bg.png' alt="bg-img" width={0} height={0} style={{width: '100%', height: 'auto'}} />
                  </div>
                  <Image width={0} height={0} src={item.img} alt={item.title} className="z-10 absolute bottom-0" style={{width: '100%', height: 'auto'}} />
                </div>

                
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{item.title}</h1>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}>{item.des}</p>

                <div className="flex items-center justify-between mt-7 mb-3">

                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div key={index} 
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{transform:`translateX(-${5 * index * 2} px )`}}>
                        <Image width={0} height={0} src={icon} alt={icon} className="p-2" style={{width: '100%', height: 'auto'}} />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">{item.id === 3 ? 'Bientôt disponible' : 'Voir le site'}</p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>

                </div>
              </PinContainer>
              
            </div>
          ))}
        </div>
    </div>
  )
}

export default RecentProjects
