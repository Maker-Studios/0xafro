import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { type VariantProps, cva } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "~~/lib/utils";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed bottom-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 md:bottom-12 sm:right-1/2 sm:translate-x-1/2 sm:top-auto sm:flex-col md:max-w-[420px]",
      className,
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-xl transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-bottom-full data-[state=open]:sm:slide-in-from-bottom-full h-full",
  {
    variants: {
      variant: {
        default: "bg-white",
        destructive: "destructive group bg-[#FFEAD1] text-destructive-foreground",
        message: "destructive group bg-[#D3E4FF]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>
>(({ className, variant = "default", children, ...props }, ref) => {
  return (
    <ToastPrimitives.Root ref={ref} className={cn(toastVariants({ variant }), className)} {...props}>
      <div className="grid grid-cols-6 w-full">
        <span
          className={cn(
            "bg-[#D7FFD6] flex items-center justify-center",
            variant === "destructive" && "bg-[#FFEAD1]",
            variant === "message" && "bg-[#D3E4FF]",
          )}
        >
          {variant === "default" ? (
            <svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.4523 5.43406C10.2761 5.25837 10.0585 5.12988 9.81964 5.06045C9.58074 4.99101 9.3282 4.98287 9.08532 5.03677C8.84244 5.09067 8.61705 5.20488 8.42994 5.36885C8.24284 5.53283 8.10005 5.74129 8.01476 5.975L3.09382 19.5106C3.01298 19.7338 2.98687 19.9732 3.01768 20.2086C3.04848 20.444 3.13531 20.6685 3.27087 20.8634C3.40643 21.0583 3.58676 21.2178 3.79673 21.3286C4.0067 21.4394 4.24018 21.4981 4.47757 21.5C4.65235 21.4988 4.82559 21.4671 4.98945 21.4062L18.5241 16.4844C18.7579 16.3992 18.9665 16.2565 19.1305 16.0694C19.2946 15.8824 19.4089 15.657 19.4629 15.4141C19.5169 15.1712 19.5089 14.9186 19.4395 14.6797C19.3701 14.4407 19.2417 14.2231 19.066 14.0469L10.4523 5.43406ZM6.10695 15.6059L7.90694 10.6569L13.8432 16.5931L8.8932 18.3931L6.10695 15.6059ZM15.0001 7.25C15.0142 6.74297 15.1369 6.24488 15.3601 5.78937C15.8569 4.79656 16.7944 4.25 18.0001 4.25C18.6282 4.25 19.0313 4.03531 19.2798 3.57406C19.4106 3.31601 19.4856 3.03333 19.5001 2.74437C19.5008 2.54546 19.5805 2.35499 19.7217 2.21487C19.8629 2.07474 20.054 1.99644 20.2529 1.99719C20.4518 1.99793 20.6423 2.07767 20.7824 2.21885C20.9225 2.36003 21.0008 2.55109 21.0001 2.75C21.0001 3.95563 20.2013 5.75 18.0001 5.75C17.3719 5.75 16.9688 5.96469 16.7204 6.42594C16.5896 6.68399 16.5145 6.96667 16.5001 7.25562C16.4997 7.35412 16.4799 7.45157 16.4419 7.54242C16.4039 7.63328 16.3483 7.71575 16.2784 7.78513C16.2085 7.85451 16.1256 7.90945 16.0345 7.9468C15.9433 7.98415 15.8457 8.00318 15.7473 8.00281C15.6488 8.00244 15.5513 7.98268 15.4605 7.94465C15.3696 7.90661 15.2871 7.85106 15.2177 7.78115C15.1484 7.71125 15.0934 7.62836 15.0561 7.53723C15.0187 7.44609 14.9997 7.34849 15.0001 7.25ZM12.7501 4.25V2C12.7501 1.80109 12.8291 1.61032 12.9697 1.46967C13.1104 1.32902 13.3012 1.25 13.5001 1.25C13.699 1.25 13.8897 1.32902 14.0304 1.46967C14.1711 1.61032 14.2501 1.80109 14.2501 2V4.25C14.2501 4.44891 14.1711 4.63968 14.0304 4.78033C13.8897 4.92098 13.699 5 13.5001 5C13.3012 5 13.1104 4.92098 12.9697 4.78033C12.8291 4.63968 12.7501 4.44891 12.7501 4.25ZM22.2807 11.9694C22.3503 12.0391 22.4055 12.1218 22.4432 12.2128C22.4808 12.3038 22.5002 12.4014 22.5002 12.4999C22.5001 12.5984 22.4807 12.6959 22.4429 12.7869C22.4052 12.8779 22.3499 12.9605 22.2802 13.0302C22.2105 13.0998 22.1278 13.155 22.0368 13.1926C21.9458 13.2303 21.8482 13.2497 21.7497 13.2496C21.6512 13.2496 21.5537 13.2301 21.4627 13.1924C21.3717 13.1547 21.2891 13.0994 21.2194 13.0297L19.7194 11.5297C19.5787 11.389 19.4997 11.1981 19.4997 10.9991C19.4997 10.8 19.5787 10.6092 19.7194 10.4684C19.8602 10.3277 20.051 10.2486 20.2501 10.2486C20.4491 10.2486 20.64 10.3277 20.7807 10.4684L22.2807 11.9694ZM22.7373 7.96156L20.4873 8.71156C20.2985 8.77447 20.0926 8.75983 19.9146 8.67087C19.7367 8.5819 19.6014 8.42591 19.5385 8.23719C19.4756 8.04847 19.4902 7.84249 19.5792 7.66457C19.6682 7.48664 19.8242 7.35134 20.0129 7.28844L22.2629 6.53844C22.4516 6.47553 22.6576 6.49017 22.8355 6.57913C23.0134 6.6681 23.1487 6.82409 23.2116 7.01281C23.2745 7.20153 23.2599 7.40751 23.1709 7.58543C23.082 7.76336 22.926 7.89866 22.7373 7.96156Z"
                fill="#04A700"
              />
            </svg>
          ) : variant === "message" ? (
            <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.0503 4.04102H4.55029C4.15247 4.04102 3.77094 4.19905 3.48963 4.48036C3.20833 4.76166 3.05029 5.14319 3.05029 5.54102V17.541C3.05029 17.9388 3.20833 18.3204 3.48963 18.6017C3.77094 18.883 4.15247 19.041 4.55029 19.041L10.1284 19.0466L11.514 21.3126C11.647 21.5343 11.835 21.718 12.0599 21.8457C12.2847 21.9734 12.5387 22.0408 12.7973 22.0413C13.0559 22.0419 13.3102 21.9756 13.5356 21.8489C13.761 21.7222 13.9498 21.5394 14.0837 21.3182L15.475 19.041H21.0503C21.4481 19.041 21.8296 18.883 22.111 18.6017C22.3923 18.3204 22.5503 17.9388 22.5503 17.541V5.54102C22.5503 5.14319 22.3923 4.76166 22.111 4.48036C21.8296 4.19905 21.4481 4.04102 21.0503 4.04102ZM8.67529 12.666C8.45279 12.666 8.23528 12.6 8.05028 12.4764C7.86527 12.3528 7.72108 12.1771 7.63593 11.9715C7.55078 11.766 7.5285 11.5398 7.57191 11.3215C7.61532 11.1033 7.72246 10.9029 7.8798 10.7455C8.03713 10.5882 8.23759 10.481 8.45582 10.4376C8.67404 10.3942 8.90025 10.4165 9.10581 10.5017C9.31138 10.5868 9.48708 10.731 9.6107 10.916C9.73431 11.101 9.80029 11.3185 9.80029 11.541C9.80029 11.8394 9.68177 12.1255 9.47079 12.3365C9.25981 12.5475 8.97366 12.666 8.67529 12.666ZM12.8003 12.666C12.5778 12.666 12.3603 12.6 12.1753 12.4764C11.9903 12.3528 11.8461 12.1771 11.7609 11.9715C11.6758 11.766 11.6535 11.5398 11.6969 11.3215C11.7403 11.1033 11.8475 10.9029 12.0048 10.7455C12.1621 10.5882 12.3626 10.481 12.5808 10.4376C12.799 10.3942 13.0252 10.4165 13.2308 10.5017C13.4364 10.5868 13.6121 10.731 13.7357 10.916C13.8593 11.101 13.9253 11.3185 13.9253 11.541C13.9253 11.8394 13.8068 12.1255 13.5958 12.3365C13.3848 12.5475 13.0987 12.666 12.8003 12.666ZM16.9253 12.666C16.7028 12.666 16.4853 12.6 16.3003 12.4764C16.1153 12.3528 15.9711 12.1771 15.8859 11.9715C15.8008 11.766 15.7785 11.5398 15.8219 11.3215C15.8653 11.1033 15.9725 10.9029 16.1298 10.7455C16.2871 10.5882 16.4876 10.481 16.7058 10.4376C16.924 10.3942 17.1502 10.4165 17.3558 10.5017C17.5614 10.5868 17.7371 10.731 17.8607 10.916C17.9843 11.101 18.0503 11.3185 18.0503 11.541C18.0503 11.8394 17.9318 12.1255 17.7208 12.3365C17.5098 12.5475 17.2237 12.666 16.9253 12.666Z"
                fill="#2360FF"
              />
            </svg>
          ) : (
            <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.126 7.95491L17.2941 3.12304C17.012 2.84259 16.6307 2.68461 16.2329 2.68335H9.39849C9.00067 2.68461 8.61938 2.84259 8.33724 3.12304L3.50536 7.95491C3.22491 8.23706 3.06694 8.61835 3.06567 9.01616V15.8505C3.06694 16.2484 3.22491 16.6296 3.50536 16.9118L8.33724 21.7437C8.61938 22.0241 9.00067 22.1821 9.39849 22.1833H16.2329C16.6307 22.1821 17.012 22.0241 17.2941 21.7437L22.126 16.9118C22.4064 16.6296 22.5644 16.2484 22.5657 15.8505V9.01616C22.5644 8.61835 22.4064 8.23706 22.126 7.95491ZM12.0657 7.93335C12.0657 7.73444 12.1447 7.54367 12.2853 7.40302C12.426 7.26237 12.6168 7.18335 12.8157 7.18335C13.0146 7.18335 13.2054 7.26237 13.346 7.40302C13.4867 7.54367 13.5657 7.73444 13.5657 7.93335V13.1833C13.5657 13.3823 13.4867 13.573 13.346 13.7137C13.2054 13.8543 13.0146 13.9333 12.8157 13.9333C12.6168 13.9333 12.426 13.8543 12.2853 13.7137C12.1447 13.573 12.0657 13.3823 12.0657 13.1833V7.93335ZM12.8157 17.6833C12.5932 17.6833 12.3757 17.6174 12.1907 17.4938C12.0057 17.3701 11.8615 17.1944 11.7763 16.9889C11.6912 16.7833 11.6689 16.5571 11.7123 16.3389C11.7557 16.1206 11.8628 15.9202 12.0202 15.7629C12.1775 15.6055 12.378 15.4984 12.5962 15.455C12.8144 15.4116 13.0406 15.4338 13.2462 15.519C13.4518 15.6041 13.6275 15.7483 13.7511 15.9333C13.8747 16.1183 13.9407 16.3358 13.9407 16.5583C13.9407 16.8567 13.8221 17.1429 13.6112 17.3538C13.4002 17.5648 13.114 17.6833 12.8157 17.6833Z"
                fill="#FF7A00"
              />
            </svg>
          )}
        </span>

        <div className={cn("p-4 bg-white col-span-5 text-black", variant === "destructive" && "bg-white")}>
          {children}
        </div>
      </div>
    </ToastPrimitives.Root>
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className,
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className,
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title ref={ref} className={cn("text-sm font-semibold", className)} {...props} />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description ref={ref} className={cn("text-sm opacity-90", className)} {...props} />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  type ToastActionElement,
  type ToastProps,
};
