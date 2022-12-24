import './App.css';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import Events from './components/events/events';
import AllEvents from './components/allEvents/allEvents';
import AboutUs from './components/aboutUs/aboutUs';
import BeAMember from './components/BecomeMember/beAMember';
import Footer from './components/footer/footer';
import History from './components/history/history';
import UpcomingEvents from './components/upcomingEvents/upcomingEvents';
import Gallary from './components/gallary/gallary';
import Login from './components/login/Login';
import ContactUs from './components/ContactUs/ContacUs';
import Membership from './components/Membership/Membership';
import MembershipForm from './components/MembershipForm/MembershipForm';
import EventsFacilityCheckout from './components/EventsFacility/EventsFacilityCheckout/EventsFaciltiyCheckout'
import Advisiors from './components/Advisiors/Advisiors';
import ReviewMessage from './components/Confirm/ReviewMessage';
import CheckOut from './components/CheckOut/CheckOut';
import EventsFacility from './components/EventsFacility/EventsFacility';
import SportClubForm from './components/Sports/SportClubForm';
import AllEventsFacilityBooking from './components/EventsFacility/AllEventsFacilityBookings/AllEventsFacilityBooking';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SportsClub from './components/Sports/SportsClub';
import SportsFacility from './components/Sports/SportsFacility';
import SportsClubDetails from './components/Sports/SportsClubDetails';
import SportsFacilityDetails from './components/Sports/SportsFacilityDetails';
import EventsFacilityBooking from './components/EventsFacility/EventsFacilityBookings/EventsFacilityBooking';
import EventsFacilityBookingConfirmed from './components/EventsFacility/EventsFacilityBookingConfirmed/EventsFacilityBookingConfirmed';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/be-a-member" element={<BeAMember />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/Membership" element={<Membership />} />
        <Route path="/MembershipForm" element={<MembershipForm/>}/>
        <Route path="/Advisiors" element={<Advisiors/>}/>
        <Route path="/review_message" element={<ReviewMessage/>}/>
        <Route path="/Checkout" element={<CheckOut/>}/>
        <Route path="/EventsFacility" element={<EventsFacility/>}/>
        <Route path="/EventsFacilityCheckout" element={<EventsFacilityCheckout/>}/>
        <Route path="/EventsFacilityBookingConfirmed" element={<EventsFacilityBookingConfirmed/>}/>
        <Route path='/SportsClub' element={<SportsClub/>}/>
        <Route path='/SportsFacility' element={<SportsFacility/>}/>
        <Route path='/SportsClubForm' element={<SportClubForm/>}/>
        <Route path='/EventsFacilityBooking' element={<EventsFacilityBooking/>}/>
        <Route path='/AllEventsFacilityBooking' element={<AllEventsFacilityBooking/>}/>
        <Route path='/SportsClubDetails' element={<SportsClubDetails/>}/>
        <Route path='/SportsFacilityDetails' element={<SportsFacilityDetails/>}/>
        {/* <Route path="/footer" element={<Footer />} /> */}
        <Route path="/history" element={<History />} />
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
        <Route path="/upcoming-events-2" element={<AllEvents />} />
        <Route path="/gallery" element={<Gallary />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
