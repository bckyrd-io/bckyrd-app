"use client";


import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
// import { useSession } from "next-auth/react";
import { useState } from "react";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"



const gearData = [
    {
        name: "Streaming Camera",
        description: "High-definition camera for live streaming.",
        status: "Charged",
        link: "/gear/camera",
        energyConsumption: 10,
    },
    {
        name: "Microphone",
        description: "Crystal-clear audio with noise reduction.",
        status: "Ready",
        link: "/gear/microphone",
        energyConsumption: 5,
    },
    {
        name: "Gaming PC",
        description: "High-performance PC for streaming and gaming.",
        status: "Running",
        link: "/gear/pc",
        energyConsumption: 50,
    },
    {
        name: "Battery Backup",
        description: "Energy backup to ensure uninterrupted streaming.",
        status: "Charged",
        link: "/gear/battery",
        energyConsumption: 20,
    },
    {
        name: "Power Adapter",
        description: "Adapter for multiple tech devices.",
        status: "Connected",
        link: "/gear/adapter",
        energyConsumption: 15,
    },
];


const UserPage = () => {
    // const { data: session } = useSession();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(gearData.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentGear = gearData.slice(indexOfFirstItem, indexOfLastItem);



    return (
        <div className="flex flex-col items-center h-auto w-full bg-white text-black">

            {/* Gear Management Section */}
            <section className="flex flex-col w-[90%] mx-auto lg:w-[50%] mb-10 mt-10">
                <div className="flex justify-left space-x-4 mb-10">
                    <Menubar>
                        <MenubarMenu>
                            <MenubarTrigger className="text-primary"> ⌗ Menu</MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    Settings <MenubarShortcut>⌘S</MenubarShortcut>
                                </MenubarItem>
                                <Link href="/auth">
                                    <MenubarItem>
                                        SignOut <MenubarShortcut>⌘L</MenubarShortcut>
                                    </MenubarItem>
                                </Link>


                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                    {/* 
                    <Link href="/auth">
                        <Button variant="outline" className="text-primary" id="login">
                           
                        </Button>
                    </Link> */}

                </div>
                {/* Chart component can be added here */}
                <div className="flex justify-between items-center mb-0">
                    <h2 className="text-xl font-semibold">Gear List</h2>
                    <Button asChild className="flex items-center space-x-1">
                        <Link href="/gear-add">
                            <span>Add New Gear</span>
                        </Link>
                    </Button>
                </div>

                <div className="flex flex-col space-y-4 mt-10">
                    {currentGear.map((gear, index) => (
                        <Card key={index} className="flex flex-col items-start ">
                            <CardHeader>
                                <h2 className="text-xl font-semibold">{gear.name}</h2>
                            </CardHeader>

                            <div className="w-full">
                                <Image
                                    src="/drone.webp"
                                    alt={gear.name}
                                    width={1080}
                                    height={768}
                                    className=" cursor-pointer w-full h-auto"
                                />
                            </div>
                            <CardContent className="mt-5">
                                <p>{gear.description}</p>
                                <Badge variant="default" className="mt-5">{gear.status}</Badge>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Pagination */}
                <Pagination className="mt-5 justify-start">
                    <PaginationContent>
                        {currentPage > 1 && (
                            <PaginationPrevious onClick={() => setCurrentPage(currentPage - 1)} />
                        )}

                        {Array.from({ length: totalPages }, (_, index) => (
                            <PaginationItem key={index}>
                                <PaginationLink
                                    isActive={index + 1 === currentPage}
                                    onClick={() => setCurrentPage(index + 1)}
                                >
                                    {index + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}

                        {currentPage < totalPages && (
                            <PaginationNext onClick={() => setCurrentPage(currentPage + 1)} />
                        )}
                    </PaginationContent>
                </Pagination>
            </section>


        </div>
    );
};

export default UserPage;