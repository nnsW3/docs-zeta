import clsx from "clsx";
import { SVGProps } from "react";
import React from "react";

const IconZetaScanLogo = <T extends unknown>({
  color,
  ...otherProps
}: SVGProps<T, SVGSVGElement> & { color?: string }) => (
  <svg
    width="123"
    height="24"
    viewBox="0 0 123 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...otherProps}
    className={clsx(otherProps?.className, {
      "text-grey-500 dark:text-grey-300": !otherProps?.className,
    })}
  >
    <path
      d="M16.807 17.2227V20.4134H3.64454C3.82611 18.3135 4.5037 16.8359 6.84699 14.7584L16.807 6.2615V13.7177H20.3923V0H0.00394715V6.83778H3.58796V3.58533H14.4189L4.50765 12.0428L4.48396 12.0651C0.330245 15.7426 0 18.7108 0 22.208V24H20.391V17.2241H16.8057L16.807 17.2227Z"
      fill={color || "currentColor"}
    />
    <path
      d="M42.3326 12.7128C42.3208 12.7128 42.3103 12.7234 42.3103 12.7365C42.3826 14.1786 42.9839 16.5074 46.0772 16.5074C48.4639 16.5074 48.9533 15.018 49.1454 14.597C49.1494 14.5891 49.156 14.5838 49.1652 14.5838H51.4742C51.4887 14.5838 51.4979 14.597 51.4953 14.6101C51.3545 15.393 50.1467 18.4573 46.0772 18.4573C42.0077 18.4573 40.0117 15.3995 40.0117 12.0984C40.0117 8.05915 42.555 5.71191 45.9969 5.71191C49.206 5.71191 51.6085 8.1381 51.6085 11.1892C51.6085 11.3669 51.6045 11.5813 51.5953 11.83C51.5861 12.0747 51.5558 12.3629 51.5045 12.6931C51.5032 12.7036 51.494 12.7115 51.4835 12.7115H42.3326V12.7128ZM45.9443 7.50261C43.0366 7.50261 42.3379 9.66959 42.3379 10.9261C42.3379 10.9379 42.3471 10.9498 42.3603 10.9498H49.3428C49.3546 10.9498 49.3638 10.9393 49.3652 10.9274C49.4467 9.53802 48.5073 7.50261 45.9443 7.50261V7.50261Z"
      fill={color || "currentColor"}
    />
    <path
      d="M60.1743 18.1454C60.1743 18.156 60.1664 18.1652 60.1559 18.1665C59.927 18.2007 59.6257 18.2362 59.252 18.2704C58.8691 18.306 58.481 18.3244 58.0902 18.3244C56.0995 18.3244 54.2694 17.6099 54.2694 14.0759V8.00521C54.2694 7.99337 54.2602 7.98284 54.247 7.98284H52.0458C52.034 7.98284 52.0234 7.97363 52.0234 7.96047V6.054C52.0234 6.04216 52.0326 6.03163 52.0458 6.03163H54.247C54.2588 6.03163 54.2694 6.02242 54.2694 6.00926V1.96475C54.2694 1.95291 54.2786 1.94238 54.2917 1.94238H56.5732C56.585 1.94238 56.5956 1.95159 56.5956 1.96475V6.00926C56.5956 6.02111 56.6048 6.03163 56.6179 6.03163H59.727C59.7388 6.03163 59.7493 6.04084 59.7493 6.054V7.96047C59.7493 7.97231 59.7401 7.98284 59.727 7.98284H56.6179C56.6061 7.98284 56.5956 7.99205 56.5956 8.00521V13.5496C56.5956 16.0982 57.6376 16.1863 58.5994 16.1863H59.4415C59.7375 16.1863 59.9743 16.1627 60.1493 16.114C60.1625 16.11 60.1756 16.1206 60.1756 16.135V18.1454H60.1743Z"
      fill={color || "currentColor"}
    />
    <path
      d="M73.2222 6.05498V18.1425C73.2222 18.1543 73.213 18.1648 73.1998 18.1648H70.946C70.9342 18.1648 70.9236 18.1556 70.9236 18.1425V16.1373C70.9236 16.115 70.8934 16.1071 70.8842 16.1281C70.4763 16.9346 69.1106 18.4582 66.6752 18.4582C63.432 18.4582 60.4492 15.9123 60.4492 12.0994C60.4492 9.0035 62.653 5.71289 66.6752 5.71289C68.9527 5.71289 70.4184 7.11545 70.8842 8.04303C70.8947 8.06276 70.9236 8.05618 70.9236 8.03382V6.05498C70.9236 6.04314 70.9329 6.03261 70.946 6.03261H73.1998C73.2117 6.03261 73.2222 6.04182 73.2222 6.05498V6.05498ZM66.8094 16.3741C69.6698 16.3741 70.925 14.0638 70.925 12.0994C70.925 9.82319 69.3185 7.79699 66.8094 7.79699C63.9701 7.79699 62.7478 10.2192 62.7478 12.0994C62.7478 13.9795 63.903 16.3741 66.8094 16.3741V16.3741Z"
      fill={color || "currentColor"}
    />
    <path
      d="M31.8928 12.0142C29.839 13.8707 29.6759 15.3667 29.6759 17.1284V18.1639H39.0911V16.0916H31.7626C31.8705 15.1812 32.2112 14.5023 33.2375 13.572L39.0911 8.63942V6.02246H29.668V8.09472H36.5597L31.9192 11.9892L31.8928 12.0129V12.0142Z"
      fill={color || "currentColor"}
    />
    <path
      d="M79.9201 18.4155C82.7044 18.4155 84.5363 16.9745 84.5363 14.7274C84.5363 9.10983 77.4776 12.2361 77.4776 9.1831C77.4776 8.23055 78.3325 7.59552 79.627 7.59552C80.6772 7.59552 82.0206 8.15728 82.1915 9.57389H84.4386C84.292 7.25358 82.4114 5.71484 79.627 5.71484C77.0624 5.71484 75.255 7.13146 75.255 9.25638C75.255 14.5076 82.2404 11.5034 82.2404 14.7763C82.2404 15.68 81.3123 16.4371 79.9201 16.4371C78.3081 16.4371 77.3067 15.6311 77.1601 14.2145H74.9375C75.1085 16.8035 77.0136 18.4155 79.9201 18.4155Z"
      fill={color || "currentColor"}
    />
    <path
      d="M91.6616 18.4155C94.8123 18.4155 96.9861 16.657 97.3769 14.068H95.0321C94.6413 15.4602 93.4201 16.3394 91.7348 16.3394C89.2924 16.3394 88.0468 14.4343 88.0468 12.0652C88.0468 9.69601 89.268 7.79091 91.7104 7.79091C93.3957 7.79091 94.7879 8.81674 95.0077 10.2089H97.3769C97.0349 7.42455 94.5436 5.71484 91.6616 5.71484C87.8025 5.71484 85.5799 8.67019 85.5799 12.0652C85.5799 15.4602 87.8025 18.4155 91.6616 18.4155Z"
      fill={color || "currentColor"}
    />
    <path
      d="M102.692 18.4155C104.548 18.4155 106.112 17.5607 106.698 16.2173V18.2201H109.067V10.2822C109.067 7.54667 106.966 5.71484 103.791 5.71484C100.885 5.71484 98.6865 7.52225 98.4911 9.94026H100.689C100.763 8.69461 102.008 7.61994 103.718 7.61994C105.623 7.61994 106.698 8.64577 106.698 10.1357C106.698 10.5753 106.429 10.8684 105.867 10.8684H103.303C100.396 10.8684 98.5155 12.3338 98.5155 14.703C98.5155 16.9012 100.176 18.4155 102.692 18.4155ZM100.86 14.6542C100.86 13.3597 101.911 12.5292 103.523 12.5292H106.698V12.8223C106.698 15.0938 105.403 16.5348 103.156 16.5348C101.788 16.5348 100.86 15.7777 100.86 14.6542Z"
      fill={color || "currentColor"}
    />
    <path
      d="M111.53 18.2201H113.899V11.5523C113.899 9.40292 115.267 7.83976 117.197 7.83976C118.931 7.83976 120.079 9.15868 120.079 11.1126V18.2201H122.448V10.6486C122.448 7.71764 120.64 5.71484 117.856 5.71484C116.024 5.71484 114.559 6.54527 113.899 8.08401V5.91024H111.53V18.2201Z"
      fill={color || "currentColor"}
    />
  </svg>
);

export { IconZetaScanLogo };
