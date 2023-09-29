export type Videosprops = {
    
    URLvideos1:string;
    URLvideos2:string;
    URLlogo:string;
  
  }
  
  
      
      function Videos({URLvideos1,URLvideos2,URLlogo}:Videosprops){
          return (
          <>
         
         <div className="flex justify-center gap-20 mt-60 flex-wrap">
              <div className="flex justify-center items-center card video-frame">
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <iframe
                    width="560"
                    height="315"
                    src= {URLvideos1}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
  
              <div className="flex justify-center items-center ">
                <img src={URLlogo} alt="" />
              </div>
  
              <div className="flex justify-center items-center card video-frame">
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <iframe
                    width="560"
                    height="315"
                    src={URLvideos2}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
            </div>
  
  
          </>
          );
          }
  
  export default Videos;