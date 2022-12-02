import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Presence from './page/AnimatePresence';
import Basic from './page/Basic';
import Final from './page/Final';
import Gestures from './page/Gestures';
import Layout from './page/Layout';
import MotionValues from './page/MotionValues';
import Slider from './page/Slider';
import SVGAnimation from './page/SVGAnimation';
import Variants from './page/Variants';

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Basic/>
      },
      {
        path: "gestures",
        element: <Gestures />
      },
      {
        path: "variants",
        element: <Variants />
      },
      {
        path: "motionValues",
        element: <MotionValues />
      },
      {
        path: "svgAnimation",
        element: <SVGAnimation />
      },
      {
        path: "presence",
        element: <Presence />
      },
      {
        path: "slider",
        element: <Slider/>
      },
      {
        path: "layout",
        element: <Layout />
      },
      {
        path: "final",
        element: <Final />
      }
    ]
  }
])

export default router;