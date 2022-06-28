import { motion } from "framer-motion";

const Motion = ({children, delay = 0}) => (
    <motion.div
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, delay}}
    mb={6}
    >{children}</motion.div>
)

export default Motion