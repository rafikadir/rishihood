import { useEffect } from "react";


const BannerForm2 = () => {

    useEffect(() => {
        // Create script element
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://widgets.nopaperforms.com/emwgts.js';
    
        // Append script to document body
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []); 

      
    return (
        <div>
            <div className="npf_wgts" data-height="400px" data-w="37c9c8c52e93637af0e38b28f18bd901"></div>
        </div>
    );
};

export default BannerForm2;