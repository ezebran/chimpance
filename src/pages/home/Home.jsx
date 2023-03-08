import SectionOne from './section_1/SectionOne'
import SectionTwo from './section_2/SectionTwo'
import SectionThree from './section_3/SectionThree'
import SectionFour from './section_4/SectionFour'
import SectionFive from './section_5/SectionFive'
import SectionSix from './section_6/SectionSix'
import SectionSeven from './section_7/SectionSeven'
import SectionEight from './section_8/SectionEight'
import SectionNine from './section_9/SectionNine'
import SectionTen from './section_10/SectionTen'
import SectionEleven from './section_11/SectionEleven'
import SectionTwelve from './section_12/SectionTwelve'
import Sectionthirteen from './section_13/Sectionthirteen'
import SectionFourteen from './section_14/SectionFourteen'
import SectionFifteen from './section_15/SectionFifteen'
import SectionSixteen from './section_16/SectionSixteen'

import Navbar from './../../layouts/Navbar'

export default function Home({isMobile}){
    return(
        <>
            <Navbar isMobile={isMobile} />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            {isMobile && <SectionFive />}
            {isMobile && <SectionSix />}
            <SectionSeven />
            <SectionEight />
            <SectionNine />
            {isMobile && <SectionTen />}
            <SectionEleven />
            {!isMobile && <SectionTwelve />}
            {!isMobile && <Sectionthirteen />}
            <SectionFourteen />
            {!isMobile && <SectionFifteen />}
            <SectionSixteen />
        </>
    )
}