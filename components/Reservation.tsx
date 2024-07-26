"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { format, isPast } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
const Reservation = ({
  reservations,
  room,
  isUserAuthenticated,
  userData,
}: {
  reservations: any;
  room: any;
  isUserAuthenticated: boolean;
  userData: any;
}) => {
  const [checkInDate, setcheckInDate] = useState<Date>();
  const [checkOutDate, setcheckOutDate] = useState<Date>();

  const saveReservation = () => {
    if (!checkInDate || !checkOutDate) {
      console.log("please select check in and check out dates");
    }
  };

  return (
    <div>
      <div className="bg-tertiary h-[320px] mb-4">
        {/**top */}
        <div className="bg-accent py-4 text-center relativa mb-2">
          <h4 className="text-xl text-white">Book your room</h4>
        </div>
        <div className="flex flex-col gap-4 w-full py-6 px-8">
          {/** check in date picker  */}

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="default"
                size="md"
                className={cn(
                  "w-full flex justify-start text-left font-semibold",
                  !checkInDate && "text-secondary"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkInDate ? (
                  format(checkInDate, "PPP")
                ) : (
                  <span>Check in</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={checkInDate}
                onSelect={setcheckInDate}
                initialFocus
                disabled={isPast}
              />
            </PopoverContent>
          </Popover>
          {/** check out date picker  */}
          {checkInDate ? (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="default"
                  size="md"
                  className={cn(
                    "w-full flex justify-start text-left font-semibold",
                    !checkOutDate && "text-secondary"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkOutDate ? (
                    format(checkOutDate, "PPP")
                  ) : (
                    <span>Check out</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={checkOutDate}
                  onSelect={(date) => {
                    if (date && checkInDate && date > checkInDate) {
                      setcheckOutDate(date);
                    } else if (checkInDate) {
                      // Set the checkout date to the next day after the check-in date
                      setcheckOutDate(
                        new Date(checkInDate.getTime() + 24 * 60 * 60 * 1000)
                      );
                    }
                  }}
                  initialFocus
                  disabled={(date) =>
                    checkInDate ? date <= checkInDate : false
                  }
                />
              </PopoverContent>
            </Popover>
          ) : (
            ""
          )}

          {/** conditionally render the book button based on user authentication and availability */}
          {isUserAuthenticated ? (
            <Button
              variant="primary"
              size="md"
              className="w"
              onClick={saveReservation}
            >
              Book now
            </Button>
          ) : (
            <LoginLink>
              <Button variant="primary" size="md" className="w">
                Login and Book now
              </Button>
            </LoginLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reservation;
