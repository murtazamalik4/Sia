import React, { useEffect, useRef, useImperativeHandle, forwardRef, useState } from "react";
import "./ourTeam.css";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Col, Row } from "antd";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { gsap } from "gsap";


const Circle = forwardRef(({ size, delay }, ref) => {
  const el = useRef();

  useImperativeHandle(ref, () => {

    // return our API
    return {
      moveTo(x, y) {
        console.log(x, y);
        console.log(el.current);
        gsap.to(el.current, { x, y, delay: -0.1 });
      }
    };
  }, []);

  return <div className={`circle ${size}`} ref={el}>
    <img src="https://img.icons8.com/external-others-inmotus-design/134/external-Close-atm-others-inmotus-design.png"
      style={{ width: "50px" }} alt="" />
  </div>;
});

function OurTeam({ isVisible }) {
  const team = [
    {
      name: "Mr.Tamil Marren",
      position: "President",
      desc: "Managing Director, MccLaren Logistics",
      about : "Mr.Marren brings a wealth of experience and influence within the sporting communities and many youth academies and grassroots.",
      img : "assets/images/image2.png",
    },
    {
      name: "Mr. Parthiban Murugaiyan",
      position: "1st Vice President",
      desc: "Group Chairman of Ishtara Jewellery, Luvenus Jewellery SICCI – Board Director SmeCentre – Board Director",
      about : "Mr.Parthiban is a proven leader with global vision and extensive entrepreneurial experience gained over many",
      img : "assets/images/image3.jpg",
    },
    {
      name: "Ms. Jayanthi Manian",
      position: "2nd Vice President",
      desc: "Founder & Director of Chase Resource Management",
      about : "Ms.Jayanthi, is an aspiring entrepreneur and has accomplished many successes. With her vast knowledge and experience, she’s keen to give back.",
      img : "assets/images/image4.png",
    },
    {
      name: "Mr. Maneesh Tripathi",
      position: "Finance Member",
      desc: "Group CEO, Digilife Technologies SICCI – Vice Chairman",
      about :  "Mr.Maneesh is  a global citizen who has worked in more than 10 countries and with various Multinationals.",
      img : "assets/images/image5.png",
    },
    {
      name: "Mr. Joseph Pragasam",
      position: "Chairman Board of Games",
      desc: "Director, Avantis Consulting",
      about : "Mr.Joseph has more than 20 years of industry experience. He has achieved the Million Dollar Round Table and is a Distinguished Toastmaster.",
      img : "assets/images/image7.png",
    },
    {
      name: "Mr. Yahiya Khan",
      position: "Committee Member",
      desc: "Managing Director and Chairman of Big Foot Group SICCI – Board Director",
      about : "Mr. Yahiya Khan founded Big Foot Logistics. He has won numerous industry awards and most notably the Indian Business Leaders Award for 2016.",
      img : "assets/images/image6.png",
    },
    {
      name: "Mr. Mano Manikkam",
      position: "Committee Member",
      desc: "Senior Director, VISA",
      about : "Mr.Mano is a Professional with more than 22 years of industry experience with multinational corporates. He has successfully led strategic and transformational initiatives.",
      img : "assets/images/image1.jpg",
    },
    {
      name: "Mr. Thiru Kumaran",
      position: "Committee Member",
      desc: "Director, Rio Logistics",
      about : "Mr.Thiru is a hardworking individual and takes full ownership and  responsibilities while achieving desired results. He  has great interests in sporting events. ",
      img : "assets/images/image10.jpg",
    },
    {
      name: "Mr. Gobi Nathan",
      position: "Committee Member",
      desc: "Associate Director, AXA Insurance",
      about : "Mr.Gobi has more than 25years in the Financial Services. He is willing to listen and be the voice for others. He is an active golfer and engages in many social and fund-raising events.",
      img : "assets/images/image9.jpg",
    },
    {
      name: "Mrs. Suujatha Nandita Peter",
      position: "Committee Member",
      desc: "Senior Manager, Social Service Agency",
      about : "Mrs.Suujatha works with serving youth with disability. She has 25 years industry experience with various public and corporate organizations",
      img : "assets/images/image8.png",
    },
    {
      name: "Mr. Kangatharan",
      position: "Committee Member",
      desc: "Legal Profession",
      about : "Mr.Kanga is an accomplished lawyer and a former member of Singapore Institute of Arbitration. He participates actively in community engagements and keen interest in youth development initiatives.",
      img : "assets/images/image13.png",
    },
    {
      name: "Mr. Kevin Jeevan",
      position: "Committee Member",
      desc: "Entrepreneur | Recruitment Director, 25 Talents",
      about : "Mr.Kevin has almost 15 year in the recruitment industry. As a driven and ambitious individual, he is always aspiring to contribute more.",
      img : "assets/images/image12.jpg",
    },
    {
      name: "Mr. Dinesh Natarajan",
      position: "Committee Member",
      desc: "Founder and CEO, Trident",
      about : "Mr.Dinesh is a seasoned legal professional who has advised many clients ranging from government entities to MNCs. He is an active representative in Youth development and community initiatives.",
      img : "assets/images/image14.png",
    },
  ]

  const [teamDetails, setTeamDetails] = useState({})

  const circleRefs = useRef([]);
  const teamMemberRef = useRef();

  circleRefs.current = [];

  useEffect(() => {
    gsap.to(teamMemberRef.current, { x: window.innerWidth, duration: -1 });
    circleRefs.current.forEach(ref => ref.moveTo(window.innerWidth / 2, window.innerHeight / 2));

    const onMove = ({ clientX, clientY }) => {
      circleRefs.current.forEach(ref => ref.moveTo(clientX, clientY));
    };

    window.addEventListener("pointermove", onMove);

    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const addCircleRef = ref => {
    if (ref) {
      circleRefs.current.push(ref);
    }
  };

  const openContent = (team) => {
    gsap.to(teamMemberRef.current, { x: 0, duration: 0.5 });
    setTeamDetails(team)
  };

  const closeContent = (e) => {
    gsap.to(teamMemberRef.current, { x: window.innerWidth, duration: 0.5 });
  };

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="our-team-container">
        <div className="team-container-inner">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
          >
            <div className="header">Our Team</div>
          </motion.div>

          <Swiper
            className="mySwiper"
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
          >
            {team.map((team, index) =>
              <SwiperSlide key={index}>
                <div className="team" onClick={()=>{openContent(team)}}>
                  <img className="profile" src={team.img} alt="" />
                  <div className="team_2">
                    <div className="name">{team.name}</div>
                    <div className="position">{team.position}</div>
                    <div className="explain">
                      {team.desc}
                    </div>
                  </div>
                  <div className="icons">
                    <div className="facebook">
                      <img src="images/facebook.png" alt="" />
                    </div>
                    <div className="twitter">
                      <img src="images/twitter.png" alt="" />
                    </div>
                    <div className="insta">
                      <img src="images/instagram.png" alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>)}
          </Swiper>
          {/* <Drawer width={"100%"}  title="Basic Drawer" placement="right" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer> */}

          {/* {team.map((team, index) => */}
          <div ref={teamMemberRef} className="team-member-detail" onClick={closeContent}>
            <div class="inner-wrap">
              <Row>
                <Col xs={24} lg={12}>
                  <div class="team_member_details">
                    <div class="bio-inner">
                      <span class="mobile-close">
                      </span>
                      <h1>{teamDetails.name}</h1>
                      <div class="title">{teamDetails.position}</div>
                      <br />
                      <div class="team-desc">
                        <p>
                          {teamDetails.about}
                        </p>
                        <div class="bottom_meta"></div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={24} lg={12}>
                  <div class="team_member_picture">
                    <div class="team_member_image_bg_cover"></div>
                    <div class="team_member_picture_wrap">
                      <img src={teamDetails.img} alt="" />
                    </div>
                  </div>
                </Col>
              </Row>

            </div>

            <Circle size="sm" ref={addCircleRef} delay={0} />
          </div>
          {/* )}  */}
        </div>

      </div>
    </>
  );
}

export default OurTeam;
