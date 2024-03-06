import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { OSThemContext } from "../../Context/OSThemeContext";

export const Drawer = function ({ children, updateOpen }) {
  const { theme } = useContext(OSThemContext);
  return (
    <div className="w-full h-full bg-black bg-opacity-10 absolute top-0 left-0 z-[101] overflow-hidden">
      <AnimatePresence>
        <motion.div
          drag="y"
          className="drawer-wrapper h-full w-full"
          dragConstraints={{ top: 0, bottom: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.y > 200) updateOpen(false);
          }}
        >
          <motion.div
            exit={{ opacity: 0.5, y: "100%" }}
            initial={{ opacity: 0.5, y: "20px" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="h-full w-full relative"
          >
            <div
              className={`h-[90%] box-border px-50 w-full ${
                theme === "dark" ? "bg-black" : "bg-white"
              }bg-opacity-80 backdrop-blur-lg border-1 border-gray-500 rounded-tl-2xl rounded-tr-2xl shadow-md overflow-hidden -bottom-1 absolute flex flex-col`}
            >
              <div className="w-32 h-fit p-1 my-5 mx-auto rounded-full bg-white bg-opacity-90 shadow-lg"></div>
              <div className="w-full flex-1 overflow-auto">{children}</div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export const DrawerHeader = function ({ children }) {
  return <div>{children}</div>;
};

export const DrawerBody = function ({ children }) {
  return (
    <div className="w-[60%] 2xl:w-[80%] xl:w-full mx-auto h-full text-white">
      {children}
    </div>
  );
};

export const DrawerFooter = function ({ children }) {
  return <div>{children}</div>;
};
