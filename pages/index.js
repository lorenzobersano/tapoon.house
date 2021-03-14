import { motion } from "framer-motion";
import Head from "next/head";
import useSound from "use-sound";
import { Icon, icons } from "../components/Icon";

export default function Home() {
  const [
    playMainTheme,
    { pause: pauseMainTheme, isPlaying: isPlayingMainTheme },
  ] = useSound("/john_cena.mp3", {
    autoplay: true,
    loop: true,
  });
  const [playAirHorn, { stop: stopAirHorn }] = useSound("/air_horn.mp3");

  return (
    <div>
      <Head>
        <title>tapoon.house</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen w-screen bg-gradient-to-b from-gray-900 to-gray-800 relative">
        <div className="hidden sm:block fixed top-0 right-0">
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="button"
            className="text-white sticky sm:fixed top-0 right-0 m-8"
            onClick={() =>
              !isPlayingMainTheme ? playMainTheme() : pauseMainTheme()
            }
          >
            {isPlayingMainTheme ? (
              <Icon
                name={icons.PAUSE}
                colors={{
                  primary: "text-yellow-300",
                  secondary: "text-blue-600",
                }}
              />
            ) : (
              <Icon
                name={icons.PLAY}
                colors={{
                  primary: "text-yellow-300",
                  secondary: "text-blue-600",
                }}
              />
            )}
          </motion.button>
        </div>
        <div className="block fixed sm:hidden bottom-0 right-0">
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="button"
            className="text-white sticky sm:fixed top-0 right-0 m-8"
            onClick={() =>
              !isPlayingMainTheme ? playMainTheme() : pauseMainTheme()
            }
          >
            {isPlayingMainTheme ? (
              <Icon
                name={icons.PAUSE}
                colors={{
                  primary: "text-yellow-300",
                  secondary: "text-blue-600",
                }}
              />
            ) : (
              <Icon
                name={icons.PLAY}
                colors={{
                  primary: "text-yellow-300",
                  secondary: "text-blue-600",
                }}
              />
            )}
          </motion.button>
        </div>
        <section className="container mx-auto flex flex-col items-center">
          <h1 className="text-yellow-200 text-6xl my-6">
            Benvenuti a casa Tapoon
          </h1>
          <img
            src="/tapoon_house_home_pic.jpg"
            className="max-w-xs md:max-w-xl rounded-lg "
          />
        </section>
        <section className="container mx-auto flex flex-col items-center mt-12 space-y-8">
          <p className="text-white text-xl">Abbiamo...</p>
          <a
            href="https://www.beaconcha.in/validator/0xa332a76f255da33d695233af574b24fc247a8d2620ea52814a7421ea6bcb7d033a644906526e1cb81623ebcede98fc4c"
            target="_blank"
          >
            <h3
              onMouseEnter={() => playAirHorn()}
              onMouseLeave={() => stopAirHorn()}
              className="text-green-200 text-3xl underline"
            >
              UN COMPUTER PIENO DI SOLDI!!!!
            </h3>
          </a>
        </section>
      </main>
    </div>
  );
}
