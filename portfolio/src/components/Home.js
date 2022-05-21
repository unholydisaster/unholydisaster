import { Biglogo, Content, Homecontainer, Imagecontainer, Linkaa, Linkcontent, Linklii, Linkp, Thanks } from "../styles/Home";
import logoPic from "../../public/avator1.jpg"
import Image from "next/image"
import { Allanh1 } from "../styles/Allan";

export default function Homepage(){
   return(
       <>
       <Homecontainer>
           <Biglogo>Eli Musa</Biglogo>
           <Content>Hello! I&apos;m a student at Meru University of Science and Technology, I like web design, Frontend software development and playing football.</Content>
           <Content>I&apos;m passionate about sharing knowlendge to the world through tutorials on the internet.  </Content>
           <Content>You can:</Content>
           <Linkcontent>
             <Linklii>Follow me on  <Linkaa href="/" passHref><Linkp>Twitter</Linkp></Linkaa></Linklii>
             <Linklii>Follow me on  <Linkaa href="/" passHref><Linkp>Instagram</Linkp></Linkaa></Linklii>
             <Linklii>Follow me on  <Linkaa href="/" passHref><Linkp>facebook</Linkp></Linkaa></Linklii>
             <Linklii>Read my writting on  <Linkaa href="/" passHref><Linkp>Topcoder</Linkp></Linkaa></Linklii>
             <Linklii>View a list of <Linkaa href="/" passHref><Linkp>projects I&apos;m involved with</Linkp></Linkaa></Linklii>
           </Linkcontent>
             <Thanks>Thank you!</Thanks>
             <Imagecontainer>
               <Image src={logoPic} alt="Picture" />            </Imagecontainer>  
       </Homecontainer>
       <Allanh1>allan is a bad boy</Allanh1>
       </>
   )
}