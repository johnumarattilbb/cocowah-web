import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Showcase from './components/Showcase';
import { Box, Divider, ThemeProvider } from '@mui/material';
import Preloader from './components/Preloader';
import cocowahTheme from "./theme/cocowahMuiTheme";
import colorPalette from './theme/colorPalette';
import { motion, AnimatePresence } from 'framer-motion';
// Import MUI icons
import ReceiptLongTwoToneIcon from '@mui/icons-material/ReceiptLongTwoTone';
import InsightsTwoToneIcon from '@mui/icons-material/InsightsTwoTone';
import BalanceTwoToneIcon from '@mui/icons-material/BalanceTwoTone';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    // Simulate a loading time for your assets
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  const showcase1 = {
    title: "Nothing new, it’s old practices",
    desc: "Today, we're bringing the power of seamless financial management to your fingertips. Our app bridges the gap between old practices of writing down each of income, expense to plan for the financial health. Our app fill in modern needs, ensuring you have a comprehensive view of your monetary movements at all times",
    imgUrl: "https://onedrive.live.com/embed?resid=1656BB0C87C6BA8%21253994&authkey=%21ALRR9sleh4puwlo&width=1157&height=794" // Replace with your actual image path
  };

  const showcase2 = {
    title: "Granular Control Makes You Limitless",
    desc: "Categorizing your categories, subcategories, and items at three levels allows you to organize, manage, and analyze your expenses and income in unparalleled detail. Experience financial clarity and empowerment like never before",
    imgUrl: "https://onedrive.live.com/embed?resid=1656BB0C87C6BA8%21253993&authkey=%21ABrMIDBeyNietDQ&width=6100&height=4067" // Replace with your actual image path
  };

  const showcase3 = {
    title: "Sit back and Visualize, Analyze, and Predict Your Finance Trends.",
    desc: "Embrace our system's precision and depth, transforming your financial foresight and making you a master of money management",
    imgUrl: "https://onedrive.live.com/embed?resid=1656BB0C87C6BA8%21253995&authkey=%21ABg-JJebpx1oQBo&width=1368&height=828" // Replace with your actual image path
  };

  // Array of features
  const features = [
    { icon: <ReceiptLongTwoToneIcon sx={{ fontSize: '40px', color: colorPalette.Lime_600 }} />, title: 'Magic Scan Wizardry', desc: 'Effortlessly convert your receipts into digital data. Drop any document, and watch as it automatically captures each item, simplifying expense tracking.' },
    { icon: <InsightsTwoToneIcon sx={{ fontSize: '40px', color: colorPalette.Purple_600 }} />, title: 'Item-Level Insights', desc: 'Gain detailed insights into your spending. Our scanner breaks down expenses item by item, offering a clear view of your financial habits.' },
    { icon: <BalanceTwoToneIcon sx={{ fontSize: '40px', color: colorPalette.Blue_600 }} />, title: 'Balance scale with coins and shopping cart.', desc: 'Streamline your shopping and budgeting with a tool that provides immediate access to your buying history. This enhances financial decision-making with accuracy and ease.' },
  ];


  return (
    <ThemeProvider theme={cocowahTheme}>
      <div className="App">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Box className='header'
              margin={'auto'}
              sx={{
                position: 'sticky',
                top: 0,
                backgroundColor: scrolled ? colorPalette.Amber_200 : 'transparent',
                zIndex: 1000,
                padding: scrolled ? '8px 8px' : '32px 8px',
                transition: 'background-color 0.3s, padding 0.3s'
              }}
            >
              <Header></Header>
            </Box>
            <Box maxWidth={'1200px'} p='0 8px' margin={'auto'} mb={'48px'}>
              <Hero></Hero>
            </Box>
            <Divider></Divider>
            <Box maxWidth={'1200px'} p='0 8px' margin={'auto'}>
              <Feature viewMode='column' features={features}></Feature>
            </Box>
            <Box p='0 8px'>
              <Testimonials></Testimonials>
            </Box>
            <Box p='0 8px' maxWidth={'1200px'} margin={'auto'}>
              <Showcase viewMode='left' title={showcase1.title} desc={showcase1.desc} imgUrl={showcase1.imgUrl} />
            </Box>
            <Divider></Divider>
            <Box p='0 8px' maxWidth={'1200px'} margin={'auto'}>
              <Showcase viewMode='right' title={showcase2.title} desc={showcase2.desc} imgUrl={showcase2.imgUrl} />
            </Box>
            <Divider></Divider>
            <Box p='0 8px' maxWidth={'1200px'} margin={'auto'}>
              <Showcase viewMode='column' title={showcase3.title} desc={showcase3.desc} imgUrl={showcase3.imgUrl} />
            </Box>
            <Box p='0 8px' sx={{ background: colorPalette.Amber_200 }}>
              <Box maxWidth={'1200px'} margin={'auto'}>
                <Footer></Footer>
              </Box>
            </Box>
          </motion.div>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
