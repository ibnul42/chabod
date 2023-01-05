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
          <p className="text-primary text-2xl font-bold capitalize">
            Our founder
          </p>
          <div className="my-3 flex flex-col gap-4 font-medium">
            <p>
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
            </p>
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
