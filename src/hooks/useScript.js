import { useEffect } from 'react';

const useScript = url => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        setTimeout(() => {
            document.body.appendChild(script);
        }, 200);
        return () => {
            document.body.removeChild(script);
        }
    }, [url]);
};

export default useScript;