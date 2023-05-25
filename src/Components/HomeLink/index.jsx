import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomeLink({ title, children, path }) {
  const classes =
    "w-[180px] h-[180px] text-center text-2xl m-1 font-bold grid grid-cols-1 justify-around items-center bg-slate-500 shadow-md rounded ";
  const smallText = "text-xs font-medium w-full text-center mt-2 p-2";

  return (
    <motion.div
      initial={{
        scaleX: 0,
      }}
      animate={{
        scaleX: 1,
      }}
      transition={{
        duration: 0.75,
      }}
      className={`${classes}`}
    >
      <Link
        to={path}
        className="w-full h-full relative flex justify-center items-center flex-col"
      >
        <div>{title}</div>
        <div className={`${smallText}`}>{children}</div>
      </Link>
    </motion.div>
  );
}
