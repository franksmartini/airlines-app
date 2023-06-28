import axios from 'axios';
import { AIRLINES_API_URL } from '../constants';
const SAMPLE_DATA = [
  {
    "id": 2,
    "name": "Air India",
    "country": "India",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/Air_India_Logo.svg/250px-Air_India_Logo.svg.png",
    "slogan": "Your Palace in the Sky",
    "head_quaters": "Airlines House, New Delhi, India",
    "website": "https://www.airindia.in",
    "established": "1990"
  },
  {
    "id": 128116,
    "name": "Rwanda Airways",
    "country": "Rwanda",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Rwanda",
    "head_quaters": "Rwanda",
    "website": "www.tzairways.com",
    "established": "1979"
  },
  {
    "name": "Sri Lankan Airways",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "name": "Sri Lankan Airwayss",
    "country": "Sri Lankaa",
    "slogan": "From Sri Lanka"
  },
  {
    "id": 48744111,
    "name": "Sri Lankan Airways",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "id": 899999000,
    "name": "qwertyu",
    "country": "asdfghj",
    "logo": "sdfgh",
    "slogan": "zxcvbnm",
    "head_quaters": "hsdfghj",
    "website": "zxcvbnm,",
    "established": "45645"
  },
  {
    "id": 899999001,
    "name": "qwertyu",
    "country": "asdfghj",
    "logo": "sdfgh",
    "slogan": "zxcvbnm",
    "head_quaters": "hsdfghj",
    "website": "zxcvbnm,",
    "established": "45645"
  },
  {
    "id": 8999990012,
    "name": "qwertyu",
    "country": "asdfghj",
    "logo": "sdfgh",
    "slogan": "zxcvbnm",
    "head_quaters": "hsdfghj",
    "website": "zxcvbnm,",
    "established": "45645"
  },
  {
    "id": 899999007,
    "name": "qwertyu",
    "country": "asdfghj",
    "logo": "sdfgh",
    "slogan": "zxcvbnm",
    "head_quaters": "hsdfghj",
    "website": "zxcvbnm,",
    "established": "45645"
  },
  {
    "name": "afafa",
    "country": "afasfas",
    "slogan": "afafa"
  },
  {
    "id": 4306466454,
    "name": "Parker, Pouros and Koepp",
    "country": "Tokelau",
    "logo": "pnjEEMUNRcBUnRjEUFfj.png",
    "slogan": "Operative national support",
    "head_quaters": "Westfurt",
    "website": "https://ypXseMLDua.com",
    "established": "1914"
  },
  {
    "id": 899999080,
    "name": "qwertyu",
    "country": "asdfghj",
    "logo": "sdfgh",
    "slogan": "zxcvbnm",
    "head_quaters": "hsdfghj",
    "website": "zxcvbnm,",
    "established": "45645"
  },
  {
    "id": 4222411,
    "name": "Sri Lankan Airways",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "id": 314411,
    "name": "Sri Lankan Airways",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "id": 434711,
    "name": "Sri Lankan Airways",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "id": 45334711,
    "name": "Sri Lankan Airways",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "id": 747628,
    "name": "Tamela Bechtelar",
    "country": "Iceland",
    "logo": "NHCKgkNIQTRndRomnWeJAyvfa",
    "slogan": "NPvmTxzXhKxmjPQJlwePIzvrA",
    "head_quaters": "South Tamicatown",
    "website": "https://https://New Waltonmouth.com",
    "established": "1956"
  },
  {
    "id": 341,
    "name": "QAir_2",
    "country": "US",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/India.png",
    "slogan": "Travel Everywhere",
    "head_quaters": "California, US",
    "website": "https://travel.testsigma.com/",
    "established": "1997"
  },
  {
    "id": 994,
    "name": "Lee Schaden Airline",
    "country": "Egypt",
    "logo": "http://placeimg.com/640/480",
    "slogan": "Ex necessitatibus velit qui.",
    "head_quaters": "North Felicita",
    "website": "https://donnie.info",
    "established": "1969"
  },
  {
    "name": "Saraswathi"
  },
  {
    "name": "Saraswathi"
  },
  {
    "id": 712881,
    "name": "Carrol Tillman",
    "country": "Tuvalu",
    "logo": "hyzSkDqpcZlYrjJLUFZRVGCZL",
    "slogan": "Stand-alone executive hierarchy",
    "head_quaters": "Dantebury",
    "website": "https://Lake Manie.com",
    "established": "2006"
  },
  {
    "id": 781848,
    "name": "Mr. Samuel Bechtelar",
    "country": "Cambodia",
    "logo": "zOxubKqBSJeZDfskFEDVHITLy",
    "slogan": "Switchable heuristic conglomeration",
    "head_quaters": "New Lanitown",
    "website": "https://Wenfurt.com",
    "established": "1908"
  },
  {
    "id": 560278,
    "name": "Donte",
    "country": "Russian Federation",
    "logo": "omgRRMGRJmgAGHOSiyyxirnBz",
    "slogan": "GeBevZFIeyBVyhOeXomS",
    "website": "https://jhbifQUBzu.com",
    "established": "2003"
  },
  {
    "name": "Sri Lankan Airways",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "id": 1995,
    "name": "Cachorro Caramelo Airways",
    "country": "Brazil",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "Adote um doguinho caramelo",
    "head_quaters": "Franca, Brazil",
    "website": "www.dogcarameloairways.com",
    "established": "1995"
  },
  {
    "id": 55551313649,
    "name": "Sri Lankan Airways",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "id": 55596052595,
    "name": "Sri Lankan Airways",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "id": 1827,
    "name": "Sri Lankan Airways",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "id": 1343244532,
    "name": "Sri Lankan Airways",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "name": "irbaaz"
  },
  {
    "id": 963,
    "name": "Julian Rogahn Airline",
    "country": "Saint Martin",
    "logo": "http://placeimg.com/640/480",
    "slogan": "Eum ex sed voluptas in et illum suscipit alias.",
    "head_quaters": "Lake Aleenstad",
    "website": "http://stella.org",
    "established": "1969"
  },
  {
    "id": 125,
    "name": "Sri Ram Airways",
    "country": "India",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Mumbai",
    "head_quaters": "Bangalore",
    "website": "www.indianair.com",
    "established": "1990"
  },
  {
    "id": 345,
    "name": "QAir_2",
    "country": "US",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/India.png",
    "slogan": "Travel Everywhere",
    "head_quaters": "California, US",
    "website": "https://travel.testsigma.com/",
    "established": "1997"
  },
  {
    "id": 351,
    "name": "SimplyTravel_2",
    "country": "India",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/India.png",
    "slogan": "Travel in Leisure",
    "head_quaters": "Mumbai, India",
    "website": "https://simply-travel.testsigma.com/",
    "established": "2000"
  },
  {
    "id": -3235514,
    "name": "Sri Lankan Airways",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "id": 393,
    "name": "Sri Lankan Airways",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "id": 6979,
    "name": "Laulau Airways",
    "country": "Laulau Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "name": "Dubey Airline",
    "country": "India",
    "logo": "test.png",
    "slogan": "The world on wings.",
    "head_quaters": "Pune",
    "website": "www.rohan-airline.com",
    "established": "2023"
  },
  {
    "id": 1565454900096,
    "name": "indian Airways",
    "country": "india",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "id": 55536973960,
    "name": "Sri Lankan Airways",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "id": 444176353535,
    "name": "Sri Lankan Airways",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "id": 5558145964,
    "name": "Sri Lankan Airways",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "id": 48084368179,
    "name": "Sri Lankan Airways1",
    "country": "Sri Lanka1",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka1",
    "head_quaters": "Katunayake, Sri Lanka1",
    "website": "www.srilankaairways1.com",
    "established": "1990"
  },
  {
    "id": 41986783289,
    "name": "Sri Lankan Airways1",
    "country": "Sri Lanka1",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka1",
    "head_quaters": "Katunayake, Sri Lanka1",
    "website": "www.srilankaairways1.com",
    "established": "1990"
  },
  {
    "id": 88222800236,
    "name": "Sri Lankan Airways1",
    "country": "Sri Lanka1",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka1",
    "head_quaters": "Katunayake, Sri Lanka1",
    "website": "www.srilankaairways1.com",
    "established": "1990"
  },
  {
    "name": "Sri Lankan Airways",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "id": 30662159069,
    "name": "Sri Lankan Airways1",
    "country": "Sri Lanka1",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka1",
    "head_quaters": "Katunayake, Sri Lanka1",
    "website": "www.srilankaairways1.com",
    "established": "1990"
  },
  {
    "id": 356,
    "name": "QAir_2",
    "country": "US",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/India.png",
    "slogan": "Travel Everywhere",
    "head_quaters": "California, US",
    "website": "https://travel.testsigma.com/",
    "established": "1997"
  },
  {
    "name": "Sri Lankan Airwayss",
    "country": "Sri Lankaa",
    "slogan": "From Sri Lanka"
  },
  {
    "id": 55518298076,
    "name": "Sri Lankan Airways",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "id": 357,
    "name": "SimplyTravel_2",
    "country": "India",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/India.png",
    "slogan": "Travel in Leisure",
    "head_quaters": "Mumbai, India",
    "website": "https://simply-travel.testsigma.com/",
    "established": "2000"
  },
  {
    "name": "Sri Lankan Airwayss",
    "country": "Sri Lankaa",
    "slogan": "From Sri Lanka"
  },
  {
    "id": 13413432,
    "name": "Sri Lankan Airways",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "name": "Sri Lankan Airwayss",
    "country": "Sri Lankaa",
    "slogan": "From Sri Lanka"
  },
  {
    "id": 892287,
    "name": "Aman",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "India",
    "head_quaters": "Delhi",
    "website": "www.srilankaairways.com",
    "established": "2010"
  },
  {
    "id": 121232,
    "name": "Sri Lankan Airways",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "id": 7878787,
    "name": "testing neeraj759",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "id": 12453245,
    "name": "ABC Airlines",
    "country": "IN",
    "logo": "ABC",
    "slogan": "ABC Slogan",
    "head_quaters": "Mumbai",
    "website": "abc.in",
    "established": "2023"
  },
  {
    "id": 122222,
    "name": "Sri Lankan Airways",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1902"
  },
  {
    "name": "Sri Lankan Airwayss",
    "country": "Sri Lankaa",
    "slogan": "From Sri Lanka"
  },
  {
    "name": "Sri Lankan Airways",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "id": 1004,
    "name": "Quatar Airways",
    "country": "Quatar",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/300px-Qatar_Airways_Logo.svg.png",
    "slogan": "Going Places Together",
    "head_quaters": "Qatar Airways Towers, Doha, Qatar",
    "website": "www.qatarairways.com",
    "established": "1994"
  },
  {
    "name": "Sri Lankan Airwayss",
    "country": "Sri Lankaa",
    "slogan": "From Sri Lanka"
  },
  {
    "id": 487444231,
    "name": "Sri Lankan Airways",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "id": 1005,
    "name": "Quatar Airways",
    "country": "Quatar",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/300px-Qatar_Airways_Logo.svg.png",
    "slogan": "Going Places Together",
    "head_quaters": "Qatar Airways Towers, Doha, Qatar",
    "website": "www.qatarairways.com",
    "established": "1994"
  },
  {
    "name": "Sri Lankan Airwayss",
    "country": "Sri Lankaa",
    "slogan": "From Sri Lanka"
  },
  {
    "name": "Vu",
    "country": "Tran QA",
    "logo": "logo",
    "slogan": "00777",
    "head_quaters": "169071",
    "website": "vu.tran+202305011556@internetbrands.com",
    "established": "Test invlid preflight"
  },
  {
    "id": 314,
    "name": "AirIndia",
    "country": "India",
    "logo": "Delhi, India",
    "slogan": "for best experience",
    "head_quaters": "Delhi, India",
    "website": "www.airIndia.com",
    "established": "1990"
  },
  {
    "name": "India Airways",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "id": 8999999,
    "name": "qwertyu",
    "country": "asdfghj",
    "logo": "sdfgh",
    "slogan": "zxcvbnm",
    "head_quaters": "hsdfghj",
    "website": "zxcvbnm,",
    "established": "45645"
  },
  {
    "id": null,
    "name": "Turkish Airlines",
    "country": "Turkiye",
    "logo": "https://www.underconsideration.com/brandnew/archives/turkish_airlines_logo.png",
    "slogan": "Widen your World",
    "head_quaters": "Istanbul",
    "website": "https://www.turkishairlines.com/en-int/press-room/about-us/our-story/",
    "established": "1933"
  },
  {
    "id": 487411,
    "name": "Sri Lankan Airways",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "id": 89999,
    "name": "qwertyu",
    "country": "asdfghj",
    "logo": "sdfgh",
    "slogan": "zxcvbnm",
    "head_quaters": "hsdfghj",
    "website": "zxcvbnm,",
    "established": "45645"
  },
  {
    "id": 89999900789,
    "name": "qwertyu",
    "country": "asdfghj",
    "logo": "sdfgh",
    "slogan": "zxcvbnm",
    "head_quaters": "hsdfghj",
    "website": "zxcvbnm,",
    "established": "45645"
  },
  {
    "id": 899999006,
    "name": "qwertyu",
    "country": "asdfghj",
    "logo": "sdfgh",
    "slogan": "zxcvbnm",
    "head_quaters": "hsdfghj",
    "website": "zxcvbnm,",
    "established": "45645"
  },
  {
    "id": 89999904,
    "name": "qwertyu",
    "country": "asdfghj",
    "logo": "sdfgh",
    "slogan": "zxcvbnm",
    "head_quaters": "hsdfghj",
    "website": "zxcvbnm,",
    "established": "45645"
  },
  {
    "id": 899999555,
    "name": "qwertyu",
    "country": "asdfghj",
    "logo": "sdfgh",
    "slogan": "zxcvbnm",
    "head_quaters": "hsdfghj",
    "website": "zxcvbnm,",
    "established": "45645"
  },
  {
    "id": 12345,
    "name": "Air India",
    "country": "India",
    "logo": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Ftopic%2FIndian-Airlines&psig=AOvVaw0KFYEt8uAarP0aeLgXDpx5&ust=1682478742658000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPiK4vCHxP4CFQAAAAAdAAAAABAE",
    "slogan": "From India",
    "head_quaters": "TN, India",
    "website": "https://www.airindia.in/",
    "established": "1990"
  },
  {
    "id": 4343411,
    "name": "Sri Lankan Airways",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "id": 8999990899,
    "name": "qwertyu",
    "country": "asdfghj",
    "logo": "sdfgh",
    "slogan": "zxcvbnm",
    "head_quaters": "hsdfghj",
    "website": "zxcvbnm,",
    "established": "45645"
  },
  {
    "id": 444411,
    "name": "Sri Lankan Airways",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "id": 453234711,
    "name": "Sri Lankan Airways",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "id": 44711,
    "name": "Sri Lankan Airways",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
  },
  {
    "id": 58572,
    "name": "Kuphal, Trantow and Leffler",
    "country": "Croatia",
    "logo": "www.tatum-prohaska.name",
    "slogan": "Organized multi-state migration",
    "head_quaters": "Apt. 560 30208 Hill Isle, New Bryantfurt, OR 37120",
    "website": "www.lesley-spencer.net",
    "established": "1959"
  },
  {
    "id": 508679,
    "name": "Kyra",
    "country": "China",
    "logo": "SiQcsqfmOpkMXcHclGpvUcOTW",
    "slogan": "dRLPWfdmGbPljKcvpzbB",
    "head_quaters": "South Ty",
    "website": "https://PvIxlAwcvc.com",
    "established": "1989"
  },
  {
    "id": 580598,
    "name": "Geri Mueller",
    "country": "Mexico",
    "logo": "fJlZuBQclAbYMjYmWdTyLskmg",
    "slogan": "Total attitude-oriented encoding",
    "head_quaters": "Lake Claytonland",
    "website": "https://New Clay.com",
    "established": "1937"
  },
  {
    "id": 167470,
    "name": "Ahmad Graham",
    "country": "Indonesia",
    "logo": "wqJJajdnOhQNUGvbkxSYtkyfp",
    "slogan": "Down-sized attitude-oriented forecast",
    "head_quaters": "Hackettview",
    "website": "https://West Bentonchester.com",
    "established": "1903"
  },
  {
    "id": 441791,
    "name": "Stacey Blick",
    "country": "South Sudan",
    "logo": "iaEJJOcdKQCDGYiJLUuBcYbKv",
    "slogan": "Sharable dynamic database",
    "head_quaters": "Lake Maire",
    "website": "https://East Linh.com",
    "established": "2020"
  },
  {
    "id": 340,
    "name": "SimplyTravel_2",
    "country": "India",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/India.png",
    "slogan": "Travel in Leisure",
    "head_quaters": "Mumbai, India",
    "website": "https://simply-travel.testsigma.com/",
    "established": "2000"
  },
  {
    "id": 234554,
    "name": "Roberto Brown",
    "country": "Israel",
    "logo": "LGOxyWULsPXCGKBOUwILHFRpD",
    "slogan": "Re-contextualized user-facing architecture",
    "head_quaters": "Kihnside",
    "website": "https://Venettaville.com",
    "established": "2019"
  },
  {
    "id": 774356,
    "name": "Jules Balistreri DVM",
    "country": "Botswana",
    "logo": "hMxnQhasEfEbrHzpkCzkSmEoC",
    "slogan": "Optimized coherent framework",
    "head_quaters": "North Elmira",
    "website": "https://New Darlena.com",
    "established": "1951"
  },
  {
    "id": 124836,
    "name": "Huey Wunsch",
    "country": "Somalia",
    "logo": "HfJidGzqxQccUFpNQoaUDlIYK",
    "slogan": "Quality-focused object-oriented system engine",
    "head_quaters": "Port Erickshire",
    "website": "https://Gisellebury.com",
    "established": "1923"
  },
];
const airlinesService = {
  fetch: async (id) => {
    return axios.get(`${AIRLINES_API_URL}/${id}`)
  },
  fetchList: async () => {
    // return axios.get(AIRLINES_API_URL)
    return new Promise((resolve, error) => {
      setTimeout(() => resolve({data: SAMPLE_DATA}), 1000);
    })
  }
}

export default airlinesService;