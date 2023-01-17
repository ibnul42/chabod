import React from "react"

const AboutUs = () => {
  return (
    <div className="px-3">
      <h1 className="text-primary text-3xl font-bold my-8 capitalize">
        About us
      </h1>
      <section className="grid grid-cols-12 gap-3">
        <div className="col-span-12 md:col-span-4">
          <img src="/images/founder.png" alt="" className="w-full mt-2" />
          <p className="text-primary flex flex-col text-center text-lg font-semibold my-3">
            <span>Armin R. Gesswein</span>
            <span>(1908-2001)</span>
          </p>
        </div>
        <div className="col-span-12 md:col-span-8">
          {/* <p className="text-primary text-2xl font-bold capitalize">
            Our founder
          </p> */}
          <div className="my-3 flex flex-col gap-4 font-medium">
            <div className="">
              <p>የአገልግሎቱ ራዕይ</p>
              <p>
                የገሃነም ደጆች የማይቋቋማትን የክርስቶስን አካል ቤተ ክርስቲያንን ለማየት እና የተሀድሶ ዝናብ
                እንዲመጣ ልክ ነቢዩ ኤርምያስ “ምድሪቱ የምታለቅሰው የሀገሩም ሳር የሚደርቀው እስከመቼ ነው?’’
                በማለት እንደማለደ እና እንደቀና ለእግዚአብሔር የጨከነ፤ ጉስቁልናን እና የጠላት ማታለልን በመቃወም
                የእግዚአብሔርን ተስፋ የያዘ የጸሎትና የምልጃ ሠራዊት በቅዱስ ቃሉና በቅዱስ መንፈሱ በምድር ዙሪያ
                በመቀስቀስ የትውልዱ ፈውስ እና እድሳት እንዲፈጥንና እንዲመጣ እንዲቀጥል መትጋት ነው።
              </p>
            </div>
            <div className="">
              <p>የአገልግሎቱ ግብ​</p>
              <p>
                በመጀመሪያ በቶሮንቶና በአካባቢዋ፣ በኦንታርዮና ካናዳ፣ በምድራችን ኢትዮጵያ እንዲሁም በዓለም ዙሪያ
                ያለውን በክርስቶስ አካል መካከል መንፈሳዊ እንቅስቃሴ (REVIVAL) እንዲነሳና ብዙዎች በወንጌል
                እንዲያምኑ መቀስቀስ እና መጸለይ ፣ የዚህን ራዕይ ፍጻሜ ለማየት ደግሞ ከሌሎች እግዚአብሔርን
                በእውነትና በመንፈስ ከሚያመልኩ ቅዱሳን ፤ ሕብረቶች እንዲሁም አብያተ ክርስቲያናት ጋር ፍሬያማ የሆነ
                ህብረትን በመመስረት እና በማድረግ ራዕዩን ይወጣል።
              </p>
            </div>
            <div className="">
              <p>የአገልግሎቱ ተልዕኮ​</p>
              <p>
                የእውነት ዓምድና መሰረት የሆነው ክርስቶስ ፤ ሁሉን የሚገዛው የመንግስቱ ጽድቅ በአካሉ ውስጥ
                እንዲገለጥ ፤ ልጁ ወደ  አደረገን እና ለአካሉ ወደ ተሰጣት ተስፋ በመመለስ ተሀድሶ እንዲፈጥንና
                በአቅጣጫ የመከሩ ሰራተኞች እንዲታደሱ እና እንዲላኩ  እንዲሁም መልዕክተኞቹን ማስታጠቅና ማነሳሳት
                በተልዕኮ ውስጥ እንዲበቁ  ማድረግ
              </p>
              <p>
                በአካሉ ውስጥ ጉበኞችን ማስነሳት፤ መቀስቀስ እንዲሁም እውነተኛ አምልኮ ዜማ እና ቅኔን የሚቀኙ
                የእድሳቱ ጉብኝት ተካፋይ እንዲሆኑ ማብቃት
              </p>
              <p>
                የእድሳቱ ጉብኝት ተካፋይ እንዲሆኑ ማብቃት ታላቅ የተሀድሶ ዝናብ በመጠበቅ ቅዱስ ቃሉን ዋናኛ መመሪያ
                በማድረግ በታደስ አእምሮ አካሉን ሊያንጻት በፈለገበት ሀይል በመገኘትና በመጠበቅ (2ኛጢሞ 3:16)
                እንዲሁም በፍጹም ልብና የመንፈስ መቃተት የእግዚአብሔርን ተስፋ እና ጣልቃ ገብነት እንዲሆን
                መትጋትቤተክርስቲያን የምትቀስቀስበት እና የምትነቃበት እንዲሁም በንሰሀ በመመለስ የቃሉን ተስፋ (2ኛ
                ዜና 7:14) በመጸለይ የእድሳቷ ጊዜ እንዲፈጥን በጸሎት መትጋት
              </p>
              <p>
                አካሉ ወደ ተፈለገችበትና ተጠራችበት እንድትተጋ እና እድሳቱ ደግሞ በቤተክርስቲያን እንዲመጣና
                እንዲያድሳት ወደ እርሱ እንድትቀርብ በሆነ የመንፈስ መቃተት እና ጩኸት መጠበቅ
              </p>
            </div>
            {/* <p>
              Armin R. Gesswein is best known as the founder and director of
              Revival Prayer Fellowship, Inc. and Ministers’ Prayer Fellowship.
              Both of these organizations had their beginning in 1953. Armin was
              a graduate of Concordia Theological Seminary and also had a M.A.
              degree from Gordon Conwell, where he served on the faculty.
              Subsequently, he was recruited by Charles E. Fuller to establish a
              training school which later became Fuller Seminary.
            </p>
            <p>
              Armin was ordained in the Lutheran Church and served in Long
              Island Lutheran Church. Not long after serving the Long Island,
              New York Church, he heard of the Great Revival that broke out in
              the Bethlehem Congregation in Oslo, Norway in the early 1930’s.
              Armin went to check out this revival and found it to be the
              greatest movement of spiritual awakening he had ever seen. The
              movement of the Holy Spirit and conviction of sin was so strong
              and real, he decided to stay and preach there for two years. It
              was during those days of revival that his wife to be, Reidun, a
              nurse, was wonderfully converted to Jesus Christ.
            </p>
            <p>
              This awakening and revival lasted nine years and spread throughout
              all of Norway and Sweden. About 20,000 people came to Christ. When
              Armin left Norway to come back to America with his bride, Reidun,
              he was never the same. He traveled from coast to coast speaking on
              Prayer and Revival. He soon became “The Apostle of Prayer and
              Revival” in America. As David Bryant put it “All across the
              country, Armin would gather ministers from all denominational
              back-grounds for prayer.” It was Armin’s Ministers’ Prayer
              Gatherings in Los Angeles, CA that invited young Billy Graham to
              hold a Crusade in 1948–and the rest is history. Later, Armin
              became an Associate Evangelist for the Billy Graham Evangelistic
              Association.
            </p>
            <p>
              For decades, Armin and his wife, Reidun, gave leadership to
              Revival Prayer Fellowship. He was also involved as Dean of the
              National Colleges of Prayer. He and Reidun raised a family of two
              daughters and one son. They made their home in San Juan
              Capistrano, CA. Armin passed away March 10, 2001 at the age of 93.
              His wife, Reidon, passed away in April of 2002.{" "}
            </p>
            <p>
              LaRue Goetz, former executive director of STEER, Inc. — STEERing
              money to missions – knew Armin for 30 years. They often traveled
              together in mission and prayer events. One of Armin’s frequent
              words was “When Jesus went back to heaven, all He left behind was
              a prayer meeting.”
            </p> */}
          </div>
        </div>
      </section>
      <div className="h-[1px] w-full bg-black opacity-25 my-4"></div>
      <section className="font-medium my-5">
        <p className="text-primary text-center text-2xl font-bold my-8 capitalize">
          A Serious Call to Revival in Our Churches Now
        </p>
        <div className="flex flex-col gap-2 items-center">
          <p className="max-w-lg md:text-center">
            We are living in crescendo times. They are filled with quick changes
            and new challenges. These are the last days, when “evil men and
            seducers shall wax worse and worse, deceiving and being deceived” (2
            Tim. 3). However, these are also days when God is at work as never
            before.
          </p>
          <p className="max-w-lg md:text-center">
            There is only one throne and Jesus is on it, not the devil. Jesus is
            not play-ing catch up with the devil either! It’s the other way
            around; but it takes a watchful eye to observe that.
          </p>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
