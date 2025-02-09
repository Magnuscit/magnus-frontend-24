import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import NavBar from "../NavBar";
import Image from "next/image";

function TeamPage() {
  return (
    <div className="w-screen h-screen bg-cream font-space uppercase">
      <div className="relative w-full flex flex-col items-center justify-center overflow-clip">
        <NavBar />
      </div>
      <div className="items-center justify-center flex lg:px-10 lg:pt-0 relative pb-10 flex-col">
        <h1 className="text-6xl lg:text-8xl lg:px-4 pb-6 lg:pb-0 font-black text-accent text-center my-8">
          (TEAM!)
        </h1>
        <div className="text-5xl font-bold px-12 text-left w-full">
          CORE COMMITTEE
        </div>
        <div className="flex flex-wrap flex-row justify-center gap-6 p-4">
          <div className="w-full max-w-[350px] h-[400px] flex flex-col bg-cream-500 shadow-lg border border-black">
            <Image
              width={200}
              height={100}
              alt=""
              src="https://media.discordapp.net/attachments/1175463935269417051/1336738497503035463/krishna-poto.jpeg?ex=67a4e63d&is=67a394bd&hm=39ba794b544af72afc34b88e3b57029a044f28ea7883a8b2db199b122f1e3ae9&=&format=webp"
              className="w-[450px] h-2/3 object-cover mt-4"
            />
            <div className="p-2 text-2xl font-medium">KRISHNA KUMAR GD</div>
            <hr className="mt-6" />
            <div className="flex flex-row items-center justify-between mt-auto">
              <div className="px-2 pt-[0.5px] text-xl">PRESIDENT</div>
              <div className="flex flex-row gap-2 pr-2">
                <a href="https://www.instagram.com/krrisshhhnnaa/">
                  <IconBrandInstagram
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
                <a href="https://www.linkedin.com/in/krishna-kumar-g-d-a42979249/">
                  <IconBrandLinkedin
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[350px] h-[400px] flex flex-col bg-cream-500 shadow-lg border border-black">
            <Image
              width={200}
              height={100}
              alt=""
              src="https://media.discordapp.net/attachments/763290505022013473/1336743610476920944/Picsart_24-07-14_11-59-26-643_-_Kishor_Kannan.jpg?ex=67a4eb00&is=67a39980&hm=105ed850cbdafcab9b0f3917c140d83b1b73278a578b4c43e6970953e9c1c199&=&format=webp&width=1906&height=1678"
              className="w-[450px] h-2/3 object-cover mt-4"
            />
            <div className="p-2 text-2xl font-medium">KISHOR KANNAN K</div>
            <hr className="mt-6" />
            <div className="flex flex-row items-center justify-between mt-auto">
              <div className="px-2 pt-[0.5px] text-xl">VICE-PRESIDENT</div>
              <div className="flex flex-row gap-2 pr-2">
                <a href="https://www.instagram.com/kish0r.25">
                  <IconBrandInstagram
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
                <a href="https://www.linkedin.com/in/kishor-kannan-b18332291?utm_source=share">
                  <IconBrandLinkedin
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[350px] h-[400px] flex flex-col bg-cream-500 shadow-lg border border-black">
            <Image
              width={200}
              height={100}
              alt=""
              src="https://media.discordapp.net/attachments/763290505022013473/1336741877831172298/AEA5A6C2-38E5-4A50-850D-F47E3B1DE3EC_1_105_c.jpeg?ex=67a4e963&is=67a397e3&hm=35349ad9168cdb241200b38988293aa1915f8714065fa85964f44a99ac28fa15&=&format=webp"
              className="w-[450px] h-2/3 object-cover mt-4"
            />
            <div className="p-2 text-2xl font-medium">RAHUL M. NAVNEETH</div>
            <hr className="mt-6" />
            <div className="flex flex-row items-center justify-between mt-auto">
              <div className="px-2 pt-[0.5px] text-xl">SECRETARY</div>
              <div className="flex flex-row gap-2 pr-2">
                <a href="https://github.com/RahulNavneeth">
                  <IconBrandGithub
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
                <a href="https://www.linkedin.com/in/rahul-m-navneeth/">
                  <IconBrandLinkedin
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[350px] h-[400px] flex flex-col bg-cream-500 shadow-lg border border-black">
            <Image
              width={200}
              height={100}
              alt=""
              src="https://media.discordapp.net/attachments/763290505022013473/1336742492825190431/hcl_pic_-_Devanadhan_C_K_AIML.jpg?ex=67a4e9f5&is=67a39875&hm=41970b2b3253a0df8ace5ba68a1db46b157f8c84162e84644c190a6a0807f991&=&format=webp&width=534&height=700"
              className="w-[450px] h-2/3 object-cover mt-4"
            />
            <div className="p-2 text-2xl font-medium">DEVANADHAN C K</div>
            <hr className="mt-6" />
            <div className="flex flex-row items-center justify-between mt-auto">
              <div className="px-2 pt-[0.5px] text-xl">JOINT-SECRETARY</div>
              <div className="flex flex-row gap-2 pr-2">
                <a href="https://www.instagram.com/deva_mahi.07">
                  <IconBrandInstagram
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
                <a href="https://www.linkedin.com/in/devanadhan-c-k/">
                  <IconBrandLinkedin
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[350px] h-[400px] flex flex-col bg-cream-500 shadow-lg border border-black">
            <Image
              width={200}
              height={100}
              alt=""
              src="https://media.discordapp.net/attachments/763290505022013473/1336743215847440395/JP_Pass_-_Jayaprakash_A.jpg?ex=67a4eaa2&is=67a39922&hm=0b8360f4772fe45e502b8c7dfe8e1bc7f26cd766952da0b165a445de11155169&=&format=webp&width=1438&height=1678"
              className="w-[450px] h-2/3 object-cover mt-4"
            />
            <div className="p-2 text-2xl font-medium">JAYAPRAKASH A</div>
            <hr className="mt-6" />
            <div className="flex flex-row items-center justify-between mt-auto">
              <div className="px-2 pt-[0.5px] text-xl">STUDENT COORDINATOR</div>
              <div className="flex flex-row gap-2 pr-2">
                <a href="https://www.instagram.com/jayaprakash_12305_">
                  <IconBrandInstagram
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
                <a href="https://www.linkedin.com/in/jaya-prakash-a-861240258/">
                  <IconBrandLinkedin
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[350px] h-[400px] flex flex-col bg-cream-500 shadow-lg border border-black">
            <Image
              width={200}
              height={100}
              alt=""
              src="https://media.discordapp.net/attachments/763290505022013473/1336744048891003022/WhatsApp_Image_2025-02-05_at_20.45.49_5030e768_-_Harsiith_A_CIT.jpg?ex=67a4eb68&is=67a399e8&hm=458edab52dfe9c5b747c80e9d8a7c00854b36a4b6420e0d82df8445766b06d93&=&format=webp&width=1258&height=1678"
              className="w-[450px] h-2/3 object-cover mt-4"
            />
            <div className="p-2 text-2xl font-medium">HARSHIITH A</div>
            <hr className="mt-6" />
            <div className="flex flex-row items-center justify-between mt-auto">
              <div className="px-2 pt-[0.5px] text-xl">STUDENT COORDINATOR</div>
              <div className="flex flex-row gap-2 pr-2">
                <a href="https://www.instagram.com/harsiith.a/">
                  <IconBrandInstagram
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
                <a href="https://www.linkedin.com/in/harsiith-a-7aa181258/">
                  <IconBrandLinkedin
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[350px] h-[400px] flex flex-col bg-cream-500 shadow-lg border border-black">
            <Image
              width={200}
              height={100}
              alt=""
              src="https://ik.imagekit.io/lovelin/1735536107661.jpeg"
              className="w-[450px] h-2/3 object-cover mt-4"
            />
            <div className="p-2 text-2xl font-medium">LOVELIN DHONI J B</div>
            <hr className="mt-6" />
            <div className="flex flex-row items-center justify-between mt-auto">
              <div className="px-2 pt-[0.5px] text-xl">WEB DEV LEAD</div>
              <div className="flex flex-row gap-2 pr-2">
                <a href="https://github.com/lovelindhoni">
                  <IconBrandGithub
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
                <a href="https://linkedin.com/in/lovelindhoni/">
                  <IconBrandLinkedin
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[350px] h-[400px] flex flex-col bg-cream-500 shadow-lg border border-black">
            <Image
              width={200}
              height={100}
              alt=""
              src="https://media.discordapp.net/attachments/763290505022013473/1336747761789309091/20241031_122511_-_Shreevathsan_R_CIT.jpg?ex=67a4eedd&is=67a39d5d&hm=81321145c3c95cb81ed3a798b0769c511c32db79c7159c0db7e32c73340a6ba4&=&format=webp&width=1258&height=1678"
              className="w-[450px] h-2/3 object-cover mt-4"
            />
            <div className="p-2 text-2xl font-medium">SHREEVATSAN R</div>
            <hr className="mt-6" />
            <div className="flex flex-row items-center justify-between mt-auto">
              <div className="px-2 pt-[0.5px] text-xl">SPONSORSHIP LEAD</div>
              <div className="flex flex-row gap-2 pr-2">
                <a href="https://www.instagram.com/vaths.19?igsh=Mjg4YmRpMWZqdmsx">
                  <IconBrandInstagram
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
                <a href="https://www.linkedin.com/in/shreevathsan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <IconBrandLinkedin
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[350px] h-[400px] flex flex-col bg-cream-500 shadow-lg border border-black">
            <Image
              width={200}
              height={100}
              alt=""
              src="https://media.discordapp.net/attachments/763290505022013473/1336751218718019704/image.png?ex=67a4f216&is=67a3a096&hm=0ada715fab21a852cb50aa9d1735aa561f2baff5ff815ae01eee54211905a6b2&=&format=webp&quality=lossless&width=1544&height=1616"
              className="w-[450px] h-2/3 object-cover mt-4"
            />
            <div className="p-2 text-2xl font-medium">SHREERAM S</div>
            <hr className="mt-6" />
            <div className="flex flex-row items-center justify-between mt-auto">
              <div className="px-2 pt-[0.5px] text-xl">
                DESIGN AND EDITING LEAD
              </div>
              <div className="flex flex-row gap-2 pr-2">
                <a href="https://www.instagram.com/shreeram_skywalker?igsh=MWZlbnhmanlrMjd0dw==">
                  <IconBrandInstagram
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
                <a href="https://www.linkedin.com/in/shreeram-s-848b0b293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <IconBrandLinkedin
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[350px] h-[400px] flex flex-col bg-cream-500 shadow-lg border border-black">
            <Image
              width={200}
              height={100}
              alt=""
              src="https://media.discordapp.net/attachments/763290505022013473/1336746104242442343/F-photo2_-_Faheem_Mohammed_Ashraff_AIML.jpg?ex=67a4ed52&is=67a39bd2&hm=c8f83e8bf75ace9eb72cd79d53fc5248eb8b8ecc7dad2ec3b2e96b4b737636ce&=&format=webp&width=544&height=568"
              className="w-[450px] h-2/3 object-cover mt-4"
            />
            <div className="p-2 text-2xl font-medium">FAHEEM MOHAMMED A</div>
            <hr className="mt-6" />
            <div className="flex flex-row items-center justify-between mt-auto">
              <div className="px-2 pt-[0.5px] text-xl">EVENTS LEAD</div>
              <div className="flex flex-row gap-2 pr-2">
                <a href="https://www.instagram.com/c_faheem.7/">
                  <IconBrandInstagram
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
                <a href="https://www.linkedin.com/in/faheem-mohammed-576574260/">
                  <IconBrandLinkedin
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[350px] h-[400px] flex flex-col bg-cream-500 shadow-lg border border-black">
            <Image
              width={200}
              height={100}
              alt=""
              src="https://media.discordapp.net/attachments/763290505022013473/1336746721883193405/IMG_6608_-_A_Varshha_AIML.JPEG?ex=67a4ede6&is=67a39c66&hm=0b19e87a62ea82671ab8b8f6ca87fd5cc335baa538e5dbfd47c0c3dacd0cfb31&=&format=webp&width=1118&height=1678"
              className="w-[450px] h-2/3 object-cover mt-4"
            />
            <div className="p-2 text-2xl font-medium">A VARSHHA</div>
            <hr className="mt-6" />
            <div className="flex flex-row items-center justify-between mt-auto">
              <div className="px-2 pt-[0.5px] text-xl">DOCUMENTATION LEAD</div>
              <div className="flex flex-row gap-2 pr-2">
                <a href="https://in.linkedin.com/in/varshha-a-105146216">
                  <IconBrandLinkedin
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[350px] h-[400px] flex flex-col bg-cream-500 shadow-lg border border-black">
            <Image
              width={200}
              height={100}
              alt=""
              src="https://ik.imagekit.io/lovelin/IMG_5417.jpg?updatedAt=1738834630014"
              className="w-[450px] h-2/3 object-cover mt-4"
            />
            <div className="p-2 text-2xl font-medium">R VELAVAN</div>
            <hr className="mt-6" />
            <div className="flex flex-row items-center justify-between mt-auto">
              <div className="px-2 pt-[0.5px] text-xl">HOSPITALITY LEAD</div>
              <div className="flex flex-row gap-2 pr-2">
                <a href="https://www.instagram.com/velavan_1011">
                  <IconBrandInstagram
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
                <a href="https://www.linkedin.com/in/velavan-r-231240293/">
                  <IconBrandLinkedin
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[350px] h-[400px] flex flex-col bg-cream-500 shadow-lg border border-black">
            <Image
              width={200}
              height={100}
              alt=""
              src="https://media.discordapp.net/attachments/763290505022013473/1336752303822340260/image.png?ex=67a4f318&is=67a3a198&hm=5b342ec43f6feac081851e492968e31f3252c49fdf6c42a8ad0b56d39377ecd7&=&format=webp&quality=lossless&width=784&height=700"
              className="w-[450px] h-2/3 object-cover mt-4"
            />
            <div className="p-2 text-2xl font-medium">KUMARA AYYAPPAN V</div>
            <hr className="mt-6" />
            <div className="flex flex-row items-center justify-between mt-auto">
              <div className="px-2 pt-[0.5px] text-xl">MEDIA LEAD</div>
              <div className="flex flex-row gap-2 pr-2">
                <a href="https://www.instagram.com/v_kumar_58627/">
                  <IconBrandInstagram
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
                <a href="https://www.linkedin.com/in/v-kumara-ayyappan-9aa184258/">
                  <IconBrandLinkedin
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[350px] h-[400px] flex flex-col bg-cream-500 shadow-lg border border-black">
            <Image
              width={200}
              height={100}
              alt=""
              src="https://media.discordapp.net/attachments/763290505022013473/1336748764169502772/Screenshot_2025-02-05_at_10.52.14_PM.png?ex=67a4efcc&is=67a39e4c&hm=2a668269916d21aa6b6c81249cb5747a84f23e43b790a30ba874e51b55dbf73e&=&format=webp&quality=lossless&width=1376&height=1344"
              className="w-[450px] h-2/3 object-cover mt-4"
            />
            <div className="p-2 text-2xl font-medium">RISHIKUMARAN M</div>
            <hr className="mt-6" />
            <div className="flex flex-row items-center justify-between mt-auto">
              <div className="px-2 pt-[0.5px] text-xl">TREASURER</div>
              <div className="flex flex-row gap-2 pr-2">
                <a href="https://www.instagram.com/rishikum4r4n?igsh=ZGszZ2VwbmN3Znll">
                  <IconBrandInstagram
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
                <a href="http://linkedin.com/in/rishi-kumaran-1a831b259">
                  <IconBrandLinkedin
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[350px] h-[400px] flex flex-col bg-cream-500 shadow-lg border border-black">
            <Image
              width={200}
              height={100}
              alt=""
              src="https://media.discordapp.net/attachments/763290505022013473/1336750455056896083/image.png?ex=67a4f160&is=67a39fe0&hm=18d3dbdcee289d6176e0140146a8fa1431a4a349a3bded948d71170f95554417&=&format=webp&quality=lossless&width=664&height=700"
              className="w-[450px] h-2/3 object-cover mt-4"
            />
            <div className="p-2 text-2xl font-medium">AYUSH KUMAR JHA</div>
            <hr className="mt-6" />
            <div className="flex flex-row items-center justify-between mt-auto">
              <div className="px-2 pt-[0.5px] text-xl">SOCIALMEDIA LEAD</div>
              <div className="flex flex-row gap-2 pr-2">
                <a href="https://www.instagram.com/ayush_jhaaaaa?igsh=M21pOHdlazM0Y3d2">
                  <IconBrandInstagram
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
                <a href="https://www.linkedin.com/in/ayush-jha-65a2a6257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <IconBrandLinkedin
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[350px] h-[400px] flex flex-col bg-cream-500 shadow-lg border border-black">
            <Image
              width={200}
              height={100}
              alt=""
              src="https://media.discordapp.net/attachments/763290505022013473/1336750415265534012/IMG_20241126_062032_097_-_Manaseswaran_S_AIML.webp?ex=67a4f156&is=67a39fd6&hm=9c29f43b53530ed98f4c362cba9843583d85eb0868cab6328d983b85846cdf91&=&format=webp&width=700&height=700"
              className="w-[450px] h-2/3 object-cover mt-4"
            />
            <div className="p-2 text-2xl font-medium">MANASESWARAN S</div>
            <hr className="mt-6" />
            <div className="flex flex-row items-center justify-between mt-auto">
              <div className="px-2 pt-[0.5px] text-xl">LOGISTICS LEAD</div>
              <div className="flex flex-row gap-2 pr-2">
                <a href="https://www.instagram.com/exotic.manaz_?igsh=ZnM2czBwcnowOXNv">
                  <IconBrandInstagram
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
                <a href="https://www.linkedin.com/in/manaseswar14?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <IconBrandLinkedin
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[350px] h-[400px] flex flex-col bg-cream-500 shadow-lg border border-black">
            <Image
              width={200}
              height={100}
              alt=""
              src="https://media.discordapp.net/attachments/763290505022013473/1336749331843387494/image.png?ex=67a4f054&is=67a39ed4&hm=7f8b14374c66e31fdbe36f799e45d85a5d3001520a4eaed2857381db2087a227&=&format=webp&quality=lossless&width=1216&height=1678"
              className="w-[450px] h-2/3 object-cover mt-4"
            />
            <div className="p-2 text-2xl font-medium">SHAN CHACKO J</div>
            <hr className="mt-6" />
            <div className="flex flex-row items-center justify-between mt-auto">
              <div className="px-2 pt-[0.5px] text-xl">CROWD CONTROL</div>
              <div className="flex flex-row gap-2 pr-2">
                <a href="https://www.instagram.com/itz_me_shanchacko/">
                  <IconBrandInstagram
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
                <a href="https://www.linkedin.com/in/shan-chacko-j-750323210/">
                  <IconBrandLinkedin
                    className="text-black rounded-full"
                    size={24}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
