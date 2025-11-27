// import React from "react";
// import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
// import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
// import { Button } from "../ui/button";
// import { LogOut, User, User2 } from "lucide-react";
// import { Link } from "react-router-dom";
// const Navbar = () => {
//   const user = false;

//   return (
//     <div className="bg-white">
//       <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
//         <div>
//           <h1 className="text-fuchsia-600 text-2xl font-bold">Dhihadi</h1>
//         </div>
//         <div className="flex items-center gap-12">
//           <ul className="flex font-medium items-center gap-5">
//             <li>Home</li>
//             <li>Jobs</li>
//             <li>Browse</li>
//           </ul>
//           {!user ? (
//             <div className="flex items-center gap-2">
//                 <Link to="/login"><Button variant="outline" className="hover:bg-black hover:text-white" >Login</Button></Link>
//                 <Link to="/signup"> <Button variant="outline" className="hover:bg-black hover:text-white">Signup</Button></Link>
            
            
//             </div>
//           ) : (
//             <Popover>
//               <PopoverTrigger>
//                 <Avatar className="cursor-pointer">
//                   <AvatarImage
//                     src="https://github.com/shadcn.png"
//                     alt="@shadcn"
//                   />
//                   <AvatarFallback>CN</AvatarFallback>
//                 </Avatar>
//               </PopoverTrigger>
//               <PopoverContent className="w-88">
//                 <div className="">
//                   <div className="flex gap-2 items-center ">
//                     <Avatar className="cursor-pointer">
//                       <AvatarImage
//                         src="https://github.com/shadcn.png"
//                         alt="@shadcn"
//                       />
//                       <AvatarFallback>CN</AvatarFallback>
//                     </Avatar>
//                     <div>
//                       <h4 className="font-medium">Akhilesh kumar</h4>
//                       <p className="text-sm ">Lorem ipsum dolor sit amet.</p>
//                     </div>
//                   </div>

//                   <div className="flex flex-col gap-3 text-gray-600 my-2">
//                     <div className="flex w-fit items-center gap-2 cursor-pointer">
//                       <User2 />
//                       <Button variant="link">View Profile</Button>
//                     </div>
//                     <div className="flex w-fit items-center gap-2 cursor-pointer">
//                       <LogOut />
//                       <Button variant="link">Logout</Button>
//                     </div>
//                   </div>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;

  return (
    <div className="bg-white border-b-2 border-gray-400">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        <div>
          <h1 className="text-black text-2xl font-bold">Dhihadi</h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-8">
            <li className="cursor-pointer hover:text-gray-600 transition-colors">Home</li>
            <li className="cursor-pointer hover:text-gray-600 transition-colors">Jobs</li>
            <li className="cursor-pointer hover:text-gray-600 transition-colors">Browse</li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button 
                  variant="outline" 
                  className="hover:bg-black hover:text-white rounded-none border-2 border-gray-400 transition-all duration-300"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button 
                  className="bg-black text-white hover:bg-gray-800 rounded-none transition-all duration-300"
                >
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 rounded-none border-2 border-gray-400">
                <div>
                  <div className="flex gap-3 items-center">
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">Akhilesh kumar</h4>
                      <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 text-gray-600 mt-4">
                    <div className="flex w-fit items-center gap-2 cursor-pointer hover:text-black transition-colors">
                      <User2 size={18} />
                      <Button variant="link" className="p-0 h-auto">View Profile</Button>
                    </div>
                    <div className="flex w-fit items-center gap-2 cursor-pointer hover:text-black transition-colors">
                      <LogOut size={18} />
                      <Button variant="link" className="p-0 h-auto">Logout</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;