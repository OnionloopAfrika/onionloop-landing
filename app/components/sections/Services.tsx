"use client"

import { JSX, useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import AOS from "aos"
import "aos/dist/aos.css"
import { GlobeIcon, QrIcon, Star, BankIcon, WalletFill, PeopleIcon, WarningIcon, ChartsView, ScanIconFill } from "../icons/svgs"

const CornerSvg = ({ className }: { className: string }) => (
    <div className={`absolute pointer-events-none z-0 ${className}`}>
        <svg width="94" height="136" viewBox="0 0 94 136" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.7">
                <path d="M60.3107 106.152C54.9314 106.152 49.3397 105.812 43.4649 105.133C16.1435 99.3621 0.359421 86.6655 0.00551736 70.2346C-0.348386 53.3284 16.3559 37.1688 40.7044 30.9902C42.3324 30.5149 43.4649 29.5645 44.2435 28.1387C45.8714 24.9475 45.2345 19.1763 42.4032 12.3867C42.3324 12.183 42.2616 12.0473 42.2616 12.0473C42.1201 11.572 42.4032 11.0287 42.8279 10.8929C42.8279 10.8929 42.8987 10.8929 42.9694 10.8929C44.7389 10.8929 51.1092 20.0591 53.2327 23.3181C54.5067 19.3801 54.7898 13.7446 54.5775 9.60287C54.5775 9.26339 54.7899 8.92394 55.073 8.78815C55.4269 8.65235 55.7808 8.65228 56.0639 8.92386C58.2581 10.6213 59.4613 14.831 60.1692 18.6332C61.2309 13.2015 62.9296 7.63392 66.8226 3.28855C67.1057 3.01696 67.5304 2.94907 67.9551 3.08487C68.309 3.28856 68.5213 3.69603 68.4505 4.03552C66.8226 11.572 66.5394 17.7505 67.7427 22.8428C69.1583 19.1764 71.9896 16.6643 75.5286 16.1211C75.8825 16.1211 76.2364 16.2569 76.4487 16.5284C76.6611 16.8 76.6611 17.2073 76.4487 17.4789C73.7591 21.6206 72.6973 27.3239 77.652 31.1261C109.786 39.2058 120.545 56.7909 119.979 70.506C119.271 87.2764 103.204 100.652 79.0676 104.658C73.0513 105.608 66.7518 106.152 60.2399 106.152H60.3107ZM45.4468 15.7135C46.7916 20.0589 47.7118 25.355 45.8007 29.0214C44.8805 30.9225 43.2526 32.1446 41.1292 32.8236C17.63 38.7984 1.42113 54.2109 1.77504 70.3023C2.12894 85.8506 17.4176 97.9363 43.748 103.504C56.4886 104.93 67.9551 104.794 78.7845 103.028C102.001 99.1584 117.502 86.3938 118.209 70.506C118.776 57.4699 108.3 40.6996 77.0857 32.8915C76.9442 32.8915 76.8734 32.8235 76.7319 32.7556C72.2019 29.4287 71.1402 24.0649 73.8298 18.6332C71.1402 19.9232 69.2999 22.8427 68.8044 26.577C68.8044 26.9844 68.4505 27.324 68.0258 27.324C67.6011 27.3919 67.1765 27.1201 67.0349 26.7807C65.053 21.6884 64.6991 15.442 65.9732 7.76974C63.0712 12.5904 62.151 18.4973 61.2309 23.8612L61.0185 25.0155C60.9478 25.4908 60.4523 25.6944 60.0984 25.7623C59.6029 25.7623 59.249 25.4228 59.249 24.9475C58.8243 19.7195 57.8334 15.2383 56.5594 12.5903C56.5594 17.1394 55.9224 22.5711 54.2944 25.898C54.2944 26.1696 54.0821 26.3734 53.7989 26.5092C53.445 26.7129 53.0203 26.6449 52.7372 26.3733C52.4541 26.1696 52.3833 25.8301 52.4541 25.4906C52.0294 24.2006 48.278 19.1083 45.5175 15.7135H45.4468Z" fill="#C7C7C7" fill-opacity="0.25" />
                <path d="M39.0017 107.306C41.4791 109.072 78.3558 109.751 78.9221 106.356C78.639 107.782 77.2234 109.139 72.1979 110.565C63.4919 111.991 54.9982 111.923 46.7876 110.565C42.5408 111.108 36.9491 105.881 39.0017 107.306Z" fill-rule="evenodd" clip-rule="evenodd" fill="#C7C7C7" fill-opacity="0.25" />
                <path d="M59.3188 112.466C55.072 112.466 50.8959 112.127 46.7199 111.448C42.7561 111.855 38.0138 108.189 37.6599 107.442C37.5183 107.103 37.6599 106.627 37.943 106.356C38.5093 105.948 39.1463 106.356 39.5002 106.627C42.0483 108.189 75.5984 108.596 78.0049 106.152C78.1465 105.745 78.5712 105.473 79.0667 105.541C79.5621 105.609 79.916 106.084 79.8453 106.559C79.4206 108.664 77.2263 110.158 72.4133 111.516C68.0249 112.195 63.6365 112.602 59.3188 112.602V112.466Z" fill="#A8A8A8" fill-opacity="0.3" />
                <path d="M61.2302 115.454C61.5841 115.115 65.7601 115.25 65.7601 115.25L65.6186 120.682C66.8927 123.33 67.742 126.25 68.5206 129.169C68.6622 130.052 68.5914 130.867 68.2375 131.749C67.5297 133.243 66.468 133.99 65.1231 134.329C66.6095 131.681 66.8219 129.102 65.4063 126.454C63.9907 124.62 62.9997 122.583 62.2211 120.411C62.2211 120.411 61.0178 115.522 61.1594 115.386L61.2302 115.454Z" fill-rule="evenodd" clip-rule="evenodd" fill="#A8A8A8" fill-opacity="0.3" />
                <path d="M65.1239 135.213C65.1239 135.213 64.5576 135.077 64.4161 134.873C64.2037 134.602 64.1329 134.194 64.3453 133.922C65.7609 131.478 65.8317 129.17 64.6284 126.929C63.2836 125.232 62.2219 123.195 61.3725 120.819C60.0277 115.387 60.1692 115.251 60.5939 114.844C60.5939 114.844 61.2309 114.3 65.7609 114.436C66.2563 114.436 66.6811 114.844 66.6811 115.319V120.547C67.9551 123.466 68.8045 126.454 69.4415 129.034C69.6538 130.256 69.4415 131.207 69.0876 132.157C68.3798 133.787 67.1057 134.805 65.407 135.28C65.3362 135.28 65.2654 135.28 65.1946 135.28L65.1239 135.213ZM62.2218 116.134C62.3634 117.016 62.7881 118.782 63.142 120.207C63.9206 122.312 64.9115 124.213 66.1856 125.911C67.2473 127.88 67.6012 129.849 67.1057 131.886C67.2473 131.75 67.3181 131.546 67.3889 131.343C67.672 130.732 67.7427 129.984 67.6012 129.238C66.9642 126.793 66.1148 123.806 64.7699 120.954C64.7699 120.818 64.6992 120.683 64.6992 120.547V115.998C63.779 115.998 62.7881 115.998 62.2218 115.998V116.134Z" fill="#A8A8A8" fill-opacity="0.3" />
                <path d="M48.1395 113.757C47.7856 113.621 43.6096 113.689 43.6096 113.689L43.7511 116.405C42.4771 117.763 41.6277 119.189 40.8491 120.682C40.7076 121.09 40.8491 121.565 41.1323 121.972C41.8401 122.719 42.9017 123.059 44.2466 123.262C42.7602 121.972 42.5478 120.614 43.9634 119.324C45.3791 118.374 46.37 117.355 47.1486 116.337C47.1486 116.337 48.3519 113.893 48.2103 113.825L48.1395 113.757Z" fill-rule="evenodd" clip-rule="evenodd" fill="#A8A8A8" fill-opacity="0.3" />
                <path d="M44.1748 124.077C44.1748 124.077 44.1039 124.077 44.0332 124.077C42.3344 123.873 41.1312 123.33 40.3526 122.447C39.7863 121.768 39.6448 121.089 39.8571 120.342C40.5649 118.917 41.4143 117.423 42.7591 115.997V113.621C42.7591 113.621 42.7591 113.145 42.9007 113.01C43.0423 112.806 43.3254 112.738 43.5377 112.738C47.8553 112.738 48.28 112.806 48.4216 112.942C48.4216 112.942 48.8463 113.213 48.9171 113.485C49.0586 113.824 49.1294 114.096 47.8553 116.676C46.8644 118.034 45.7319 119.12 44.3163 120.071C43.9624 120.41 43.75 120.818 43.75 121.157C43.75 121.701 44.2455 122.243 44.6702 122.651C44.9533 122.922 45.0241 123.33 44.8825 123.669C44.741 124.009 44.3871 124.213 44.0332 124.213L44.1748 124.077ZM44.5286 114.503V116.269C44.5286 116.269 44.5286 116.744 44.3871 116.88C43.113 118.238 42.2637 119.731 41.6266 120.953C41.6266 120.953 41.6266 121.089 41.839 121.293C41.9098 121.361 41.9805 121.429 42.1221 121.497C42.1221 121.361 42.1221 121.225 42.1221 121.021C42.1221 120.139 42.5468 119.324 43.3962 118.509C44.741 117.627 45.7319 116.676 46.5105 115.658C46.652 115.318 46.9352 114.843 47.0767 114.435C46.4397 114.435 45.5903 114.435 44.741 114.435L44.5286 114.503Z" fill="#A8A8A8" fill-opacity="0.3" />
                <path d="M69.9373 114.979C70.2912 114.843 74.4672 114.843 74.4672 114.843L74.3256 117.627C75.5997 118.985 76.4491 120.479 77.2277 122.04C77.3692 122.516 77.2277 122.923 76.9445 123.398C76.2367 124.145 75.175 124.553 73.8302 124.756C75.3166 123.398 75.5289 122.04 74.1133 120.682C72.6977 119.732 71.7068 118.645 70.9282 117.559C70.9282 117.559 69.7249 115.047 69.8665 114.979H69.9373Z" fill-rule="evenodd" clip-rule="evenodd" fill="#A8A8A8" fill-opacity="0.3" />
                <path d="M73.9003 125.638C73.9003 125.638 73.1925 125.435 73.0509 125.163C72.9094 124.824 72.9802 124.416 73.2633 124.145C73.9004 123.601 74.1835 123.058 74.2543 122.583C74.2543 122.176 74.0419 121.768 73.5464 121.361C72.2724 120.478 71.1399 119.392 70.2198 118.102C68.9457 115.522 68.5918 114.639 69.5827 114.232C69.795 114.164 70.149 113.96 74.4666 114.028C74.7497 114.028 74.962 114.164 75.1036 114.3C75.2452 114.503 75.3867 114.707 75.3867 114.911V117.355C76.59 118.849 77.4394 120.342 78.0764 121.7C78.3595 122.583 78.2179 123.33 77.6517 123.941C76.8731 124.824 75.6699 125.367 73.9711 125.638C73.9711 125.638 73.9003 125.638 73.8295 125.638H73.9003ZM71.1399 115.725C71.3522 116.133 71.5645 116.676 71.7769 117.151C72.4847 118.102 73.4049 119.052 74.6789 119.935C75.5991 120.818 76.0238 121.7 76.0238 122.583C76.0238 122.787 76.0238 122.922 76.0238 123.126C76.0946 123.058 76.2361 122.991 76.3069 122.855C76.4485 122.651 76.4484 122.515 76.4484 122.311C75.8822 121.157 75.0328 119.663 73.7588 118.238C73.6172 118.102 73.5464 117.83 73.5464 117.627V115.725C72.7678 115.725 71.9184 115.725 71.2814 115.725H71.1399Z" fill="#A8A8A8" fill-opacity="0.3" />
                <path d="M52.8079 114.843C53.2326 114.707 57.1963 115.861 57.1963 115.861L55.7808 119.46C56.347 121.564 56.4178 123.737 56.4886 125.91C56.4178 126.521 56.1347 127.064 55.5684 127.607C54.5775 128.422 53.3034 128.626 51.9586 128.558C54.0112 127.2 54.8606 125.502 54.1528 123.33C53.2326 121.7 52.8079 120.071 52.5956 118.441C52.5956 118.441 52.5956 114.843 52.8787 114.775L52.8079 114.843Z" fill-rule="evenodd" clip-rule="evenodd" fill="#A8A8A8" fill-opacity="0.3" />
                <path d="M52.5261 129.508C52.5261 129.508 52.1014 129.508 51.8183 129.508C51.3936 129.508 51.1105 129.237 50.9689 128.829C50.8981 128.49 50.9689 128.083 51.3228 127.879C53.1631 126.657 53.7294 125.299 53.1631 123.669C52.3137 122.176 51.8183 120.478 51.5352 118.645C51.5352 114.435 51.7475 114.232 52.4553 114.028C52.7384 114.028 53.1631 113.824 57.3392 115.114C57.5515 115.182 57.7639 115.386 57.9054 115.59C58.047 115.793 58.047 116.065 57.9054 116.269L56.5606 119.596C57.1269 121.904 57.1976 124.145 57.1976 126.046C57.0561 127.064 56.6314 127.811 55.9944 128.354C55.0034 129.169 53.8001 129.576 52.3845 129.576L52.5261 129.508ZM53.5878 115.861C53.5878 116.54 53.517 117.627 53.517 118.509C53.7294 120.071 54.2248 121.565 55.0034 122.99C55.4281 124.213 55.5697 125.774 54.6495 127.2C54.7911 127.2 54.8619 127.064 54.9326 126.996C55.2865 126.725 55.4989 126.317 55.4989 125.842C55.4989 124.145 55.4281 121.904 54.8618 119.664C54.8618 119.46 54.8618 119.324 54.8618 119.12L55.9236 116.405C55.0034 116.133 54.1541 115.929 53.517 115.793L53.5878 115.861Z" fill="#A8A8A8" fill-opacity="0.3" />
                <path d="M36.9533 36.7618C20.7445 46.8105 13.0294 57.0629 13.808 67.5869C14.5158 77.2961 20.4614 87.3448 37.8735 97.3256L36.1747 97.1897C-5.30282 82.5919 2.34151 47.829 36.9533 36.7618Z" fill-rule="evenodd" clip-rule="evenodd" fill="#C7C7C7" fill-opacity="0.25" />
                <path d="M53.0966 33.1637C34.906 44.4345 26.2708 55.9769 27.1909 67.723C28.0403 78.6543 34.6936 89.9251 54.1584 101.06L52.2473 100.856C5.74434 84.4934 14.3088 45.521 53.0966 33.0959V33.1637Z" fill-rule="evenodd" clip-rule="evenodd" fill="#C7C7C7" fill-opacity="0.25" />
                <path d="M86.5748 36.7618C102.784 46.8105 110.499 57.0629 109.72 67.5869C109.012 77.2961 103.067 87.3448 85.6547 97.3256L87.3534 97.1897C128.831 82.5919 121.187 47.829 86.5748 36.7618Z" fill-rule="evenodd" clip-rule="evenodd" fill="#C7C7C7" fill-opacity="0.25" />
                <path d="M70.5046 33.1637C88.6953 44.4345 97.3306 55.9769 96.4104 67.723C95.561 78.6543 88.9077 89.9251 69.443 101.06L71.354 100.856C117.857 84.4934 109.292 45.521 70.5046 33.0959V33.1637Z" fill-rule="evenodd" clip-rule="evenodd" fill="#C7C7C7" fill-opacity="0.25" />
                <path d="M63.0718 30.787C49.4819 41.0394 42.97 51.5634 43.6071 62.291C44.2441 72.2039 49.1988 82.5242 63.8504 92.6408L62.4347 92.5051C27.6106 77.6357 33.9809 42.1258 63.0718 30.855V30.787Z" fill-rule="evenodd" clip-rule="evenodd" fill="#C7C7C7" fill-opacity="0.25" />
                <path d="M62.2234 39.2067C77.2289 48.5085 84.307 58.0139 83.5992 67.7231C82.8914 76.6854 77.4413 86.0552 61.374 95.2213L62.9312 95.0853C101.294 81.5739 94.2163 49.459 62.2234 39.2067Z" fill-rule="evenodd" clip-rule="evenodd" fill="#C7C7C7" fill-opacity="0.25" />
                <path d="M42.6844 9.06075C43.1091 14.8998 47.1436 23.4548 44.6663 29.226C46.2234 29.9729 47.0728 28.8864 48.63 28.0717C49.904 26.2385 51.3196 25.2879 52.806 25.8989C54.0093 25.6274 55.2834 25.5595 56.4158 25.8989C57.1944 26.1026 57.973 26.51 58.7516 27.189C61.0166 28.479 63.2108 28.8865 65.2634 28.1396C68.7317 25.288 70.8551 26.8495 74.8188 29.0901C72.1292 26.5779 75.3143 20.8069 78.3579 16.122C72.4123 16.8689 67.033 18.0231 68.5901 23.7264C66.042 16.7331 66.8206 9.26435 68.307 0.913086C61.7244 8.17801 61.1582 15.7147 60.5211 22.9117C60.7335 19.7206 60.3088 16.5971 59.2471 13.6097C58.3977 11.1654 57.8315 8.58537 55.4957 6.41268C55.6373 12.2518 55.4957 18.2268 53.797 23.319C51.3904 18.2947 47.1436 13.5419 42.826 9.06075H42.6844Z" fill-rule="evenodd" clip-rule="evenodd" fill="#C7C7C7" fill-opacity="0.25" />
                <path d="M45.5897 30.3121C45.165 30.3121 44.7403 30.2441 44.1741 29.9725C43.7494 29.7688 43.537 29.2936 43.7493 28.8184C45.3065 25.2877 44.174 20.4671 43.0415 15.8501C42.4753 13.4058 41.909 11.0974 41.7675 9.06046C41.7675 8.65308 41.9798 8.31356 42.3337 8.17777C42.6876 8.04198 43.1123 8.17776 43.3955 8.38145C47.1468 12.1837 50.8982 16.3252 53.4463 20.8064C54.5788 16.1895 54.5788 10.9615 54.508 6.4124C54.508 6.07291 54.7204 5.73346 55.0743 5.59767C55.4282 5.46188 55.8529 5.52977 56.0652 5.80135C58.2594 7.77035 58.9672 10.0788 59.7458 12.3194L60.0997 13.338C60.2413 13.8132 60.3828 14.2205 60.5244 14.6958C61.4445 9.87512 63.2141 5.05451 67.5317 0.301756C67.8148 0.0301701 68.2395 -0.105615 68.5934 0.0980748C68.9473 0.301764 69.1596 0.641346 69.0889 1.04872C68.0979 6.95572 67.1778 13.0662 68.1687 18.9053C70.009 16.3253 74.1143 15.6464 78.1488 15.1711C78.5027 15.1711 78.8566 15.3069 79.069 15.5785C79.2813 15.85 79.2813 16.2575 79.069 16.5291C76.4501 20.6029 73.1941 26.3062 75.3883 28.411C75.7422 28.7505 75.7423 29.2256 75.4591 29.5651C75.176 29.9046 74.6806 30.0404 74.2559 29.7688L73.548 29.3614C70.0798 27.3924 68.5226 26.4419 65.833 28.7504C65.7622 28.7504 65.6914 28.8861 65.5498 28.8861C63.3556 29.7688 60.8783 29.4294 58.2594 27.9357C57.4808 27.3246 56.8438 26.9173 56.136 26.7136C55.2158 26.442 54.2249 26.442 53.0217 26.7136C52.8093 26.7136 52.597 26.7136 52.4554 26.7136C52.1015 26.5778 51.1106 26.1704 49.4118 28.6147C49.341 28.7505 49.1995 28.8182 49.0579 28.8861C48.704 29.0898 48.3501 29.2936 48.067 29.4294C47.3592 29.9047 46.5806 30.3798 45.6604 30.3798L45.5897 30.3121Z" fill="#A8A8A8" fill-opacity="0.3" />
            </g>
        </svg>
    </div>
)

const data = {
    header: {
        badge: {
            icon: "star",
            text: "Built to work your way"
        },
        title: "Different business setups support different ways of accepting and managing payments on Onionloop."
    },
    tiers: [
        {
            id: "solo",
            name: "Onion-Solo",
            description: "For small businesses run by one person. Payments are received using a static QR code that customers scan to pay. The business owner manages all transactions directly from their mobile device.",
            image: "/onion-solo.png",
            features: [
                "One QR code for all customer payments",
                "A single business wallet balance",
                "Records of completed, pending, and failed transactions",
                "Withdrawals to your linked bank account"
            ],
            workflow: [
                { icon: "qr", text: "Display your business QR code for customers to scan and pay." },
                { icon: "scan", text: "The customer scans the QR code and completes the payment." },
                { icon: "wallet", text: "The payment reflects in your business wallet." },
                { icon: "history", text: "See payment status and details in your transaction history." },
                { icon: "bank", text: "Move funds from your wallet to your linked bank account." }
            ],
            buttonText: "Open Your Business Account"
        },
        {
            id: "crew",
            name: "Onion-Crew",
            description: "For businesses with multiple staff. Payments use dynamic QR codes generated per transaction, allowing managers to review details before paying.",
            image: "/onion-crew.png",
            features: [
                "Dynamic QR codes per transaction",
                "Customer confirmation before paying",
                "Inventory monitoring",
                "Transaction visibility across staff"
            ],
            workflow: [
                { icon: "qr", text: "Generate a QR code for a specific transaction." },
                { icon: "people", text: "Customer checks the amount and details before paying." },
                { icon: "warning", text: "Issues are addressed before payment completes." },
                { icon: "wallet", text: "Confirmed payments reflect in the wallet." },
                { icon: "charts", text: "Monitor payments and inventory." }
            ],
            buttonText: "Setup business account"
        },
        {
            id: "mega",
            name: "Onion-Mega",
            description: "For businesses handling many payments across teams with dynamic QR codes per transaction.",
            image: "/onion-mega.png",
            features: [
                "Dynamic QR codes",
                "Customer confirmation",
                "Centralized transaction activity",
                "Mobile and web access"
            ],
            workflow: [
                { icon: "qr", text: "Create QR codes for each payment request." },
                { icon: "people", text: "Customers confirm or object before paying." },
                { icon: "warning", text: "Objections handled before funds move." },
                { icon: "wallet", text: "Payments sync across teams." },
                { icon: "charts", text: "Manage payments across devices." }
            ],
            buttonText: "Setup business account"
        }
    ]
}

const iconMap: Record<string, JSX.Element> = {
    qr: <QrIcon />,
    scan: <ScanIconFill />,
    wallet: <WalletFill />,
    history: <GlobeIcon />,
    bank: <BankIcon />,
    people: <PeopleIcon />,
    warning: <WarningIcon />,
    charts: <ChartsView />
}

export default function Services() {
    const [activeTier, setActiveTier] = useState(0)
    const router = useRouter()
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-out-cubic",
            offset: 80
        })
    }, [])

    return (
        <div className="w-full min-h-screen bg-white pb-16 relative overflow-hidden" id="merchants">

            <CornerSvg className="top-0 left-0" />
            <CornerSvg className="top-0 right-0 scale-x-[-1]" />
            <CornerSvg className="bottom-0 left-0 scale-y-[-1]" />
            <CornerSvg className="bottom-0 right-0 scale-[-1]" />
            <div className="w-full max-w-7xl mx-auto px-4 relative z-10">

                <header data-aos="fade-up" className="w-full flex flex-col items-center justify-center pt-8 md:pt-12">
                    <div className="bg-[#CCEA6F80] text-(--primary) flex items-center justify-center gap-2 px-5 py-2.5 rounded-full mb-6 font-medium text-sm md:text-base">
                        <Star /> {data.header.badge.text}
                    </div>
                    <h1 className="text-xl md:text-3xl w-full max-w-5xl font-semibold text-center mb-8 md:mb-12 px-4 leading-tight">
                        {data.header.title}
                    </h1>
                </header>

                <div data-aos="fade-up" data-aos-delay="100" className="flex justify-center mb-8 md:mb-12">
                    <div className="bg-[#E4E7EC] rounded-full p-1 shadow-sm border border-gray-200 inline-flex gap-1">
                        {data.tiers.map((tier, index) => (
                            <button
                                key={tier.id}
                                onClick={() => setActiveTier(index)}
                                className={`md:px-4 md:py-2 p-2 rounded-full text-sm md:text-base font-medium transition-colors ${activeTier === index ? 'bg-white text-(--primary) font-semibold' : 'text-[#98A2B3] hover:text-(--primary)'}`}
                            >
                                {tier.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="w-full mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] items-center gap-4 rounded-2xl border border-gray-100">

                        <div data-aos="fade-down" style={{ overflow: "clip" }} className="flex flex-col md:flex-row items-center bg-[#F9FFE5] p-6 gap-6 rounded-2xl lg:rounded-r-none h-full">
                            <div className="relative w-full max-w-85 h-75 rounded-2xl overflow-hidden shrink-0 mx-auto flex flex-col items-center justify-center">
                                <Image
                                    src={data.tiers[activeTier].image}
                                    alt={data.tiers[activeTier].name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex-1">
                                <h2 className="text-2xl font-semibold mb-3 text-black">
                                    {data.tiers[activeTier].name}
                                </h2>
                                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                    {data.tiers[activeTier].description}
                                </p>

                                <hr className="my-4 border-gray-200" />

                                <h3 className="text-xl mb-4 font-medium text-black">What you see</h3>

                                <ul className="space-y-2">
                                    {data.tiers[activeTier].features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            data-aos="fade-up"
                                            data-aos-delay={idx * 100}
                                            className="flex items-start gap-2 text-gray-700 text-sm"
                                        >
                                            <span className="text-gray-400 mt-0.5">•</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div style={{ overflow: "clip" }} className="bg-white p-6 rounded-2xl lg:rounded-l-none h-full flex flex-col justify-center">
                            <h3 className="text-xl mb-4 font-medium text-black">How it works day-to-day</h3>
                            <hr className="my-4 border-gray-200" />

                            <div className="space-y-3">
                                {data.tiers[activeTier].workflow.map((step, idx) => (
                                    <div
                                        key={idx}
                                        data-aos="fade-up"
                                        data-aos-delay={idx * 120}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="shrink-0 p-2 rounded-lg flex items-center justify-center w-10 h-10">
                                            {iconMap[step.icon]}
                                        </div>
                                        <p className="text-gray-700 text-sm pt-1 leading-relaxed">
                                            {step.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div data-aos="zoom-in" data-aos-delay="200" className="flex justify-center mt-8">
                        <button className="bg-[#004D40] text-white px-8 py-3 rounded-xl font-medium text-sm md:text-base hover:bg-[#003d33] transition-colors" onClick={() => router.push("/onboarding")}>
                            {data.tiers[activeTier].buttonText}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}