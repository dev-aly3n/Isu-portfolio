import { RefObject } from "react";
import {motion} from 'framer-motion';
import {useRouter} from 'next/router';

interface props {
    settingID: (id:string|null)=>void;
}

const Proj:React.FC<props>= ({settingID}) => {
    const router = useRouter();

    const projClickHandler = () => {
        document.body.style.overflow = "hidden";
        settingID("iddd")
        setTimeout(() => {
            router.push(`?ID=${"id"}`)
        }, 100);
    }
    return(
        <motion.div layoutId="iframe" className="w-96 h-[calc(100vh-160px)] flex flex-col bg-gray-50 rounded-xl overflow-hidden border-4
         border-gray-300 duration-500 cursor-pointer hover:scale-105"
         onClick={projClickHandler}>
        <img src="/media/projects/wikianime.png"  />
        <div className="flex flex-col">
            <h3>portfolio website</h3>
            <p>about :Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </motion.div>
    )
}

export default Proj;