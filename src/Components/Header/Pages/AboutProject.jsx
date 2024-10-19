import React from 'react';

const AboutProject = () => {
    return (
        <section className="p-8 text-gray-800" style={{background: 'linear-gradient(to right, #FA876B, #FEB47B)'}}>
            {/* Heading for the AboutProject Section */}
            <h1 className="text-2xl font-bold mb-4" dir="rtl">درباره پروژه</h1>

            {/* Main description of the project */}
            <div className="mb-6 text-lg" dir="rtl">
                <h6>این یک پروژه هواشناسی است</h6>
                <p>
                    که با استفاده از <span dir="ltr">API</span> های مختلف اطلاعات هواشناسی را به نمایش می‌گذارد
                    و اطلاعات آب و هوایی را برای کاربر فراهم می‌کند.
                </p>
                <p>کامپوننت‌های اصلی این پروژه به شرح زیر هستند:</p>
            </div>

            {/* List of Components with Proper RTL Layout */}
            <ul className="list-disc list-inside space-y-4" dir="rtl">
                <li>
                    <strong dir="ltr">: WeatherApp</strong> وظیفه مدیریت جستجوهای کاربر و نمایش اطلاعات آب و هوا را بر عهده دارد.
                </li>
                <li>
                    <strong dir="ltr">: FetchApiWeather</strong> این کامپوننت با استفاده از یک <span dir="ltr">API</span> اطلاعات آب و هوا را دریافت می‌کند.
                </li>
                <li>
                    <strong dir="ltr">: SearchField</strong> در این کامپوننت کاربر می‌تواند نام شهر مورد نظر خود را وارد کند.
                </li>
                <li>
                    <strong dir="ltr">: RecentLocations</strong> این کامپوننت تاریخچه جستجوهای کاربر را نگه می‌دارد.
                </li>
                <li>
                    <strong dir="ltr">: FetchUserCity</strong> این کامپوننت آدرس <span dir="ltr">IP</span> کاربر را دریافت می‌کند.
                </li>
                <li>
                    <strong dir="ltr">: WeatherByIP</strong> این کامپوننت نام شهر کاربر را با استفاده از <span dir="ltr">IP</span> مشخص می‌کند.
                </li>
            </ul>
        </section>
    );
};

export default AboutProject;
