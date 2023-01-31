import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { getAllActivities, getAllTimeline } from "../../features/home/homeSlice"

// const timeline = [
//   {
//     title: "የአገልግሎቱ ራዕይ",
//     desc: "የገሃነም ደጆች የማይቋቋማትን የክርስቶስን አካል ቤተ ክርስቲያንን ለማየት እና የተሀድሶ ዝናብ እንዲመጣ ልክ ነቢዩ ኤርምያስ “ምድሪቱ የምታለቅሰው የሀገሩም ሳር የሚደርቀው እስከመቼ ነው?’’ በማለት እንደማለደ እና እንደቀና ለእግዚአብሔር የጨከነ፤ ጉስቁልናን እና የጠላት ማታለልን በመቃወም የእግዚአብሔርን ተስፋ የያዘ የጸሎትና የምልጃ ሠራዊት በቅዱስ ቃሉና በቅዱስ መንፈሱ በምድር ዙሪያ በመቀስቀስ የትውልዱ ፈውስ እና እድሳት እንዲፈጥንና እንዲመጣ እንዲቀጥል መትጋት ነው።",
//   },
//   {
//     title: "የኋላ ታሪክ",
//     desc: `ካቦድ የጸሎትና የወንጌል ማዕከል አገልግሎት አጀማመራችን….“በመውረስ ጀምር” (ዘዳ. 2: 24, 31) በ2018 ዲሴምበር በወንጌል አማኞች ዘንድ የተለመደው በአመት መጨረሻ በሚደረግ ጾም ጸሎት ለግል ህይወት አብረው ለመጸለይ በቶሮንቶ የሚኖሩ ሶስት ወገኖች (አንድ እህት እና ሁለት ወንድሞች) ተነጋገሩ:: ይህቺ እህት ለጌታ ኢየሱስ ልደት መታሰቢያ በአል ወደ ጀርመን ከመሄዷ በፊት የጸሎት ርእሶችን ተለዋውጠው በያሉበት ቦታ ሆነው በአንድ ልብ ለአምስት ቀናት ለመጾምና ለመጸለይ ተስማሙ:: ለመጸለይ በልባቸው የተቀመጠው በህይወታቸው የታደሰ መንፈሳዊ ህይወት እንዲሆንላቸው እና የጌታ ነገር በቀጣዩ ዓመት እንዲበዛላቸው የሚል ጸሎት ነበር:: ጸሎታቸውን ሰኞ ዲሴምበር 24 ቀን ጀመሩ:: ይህን ፀሎት በጀመሩበት በዚያ ቀን ይህቺ እህት በጀርመን እያለች በውስጧ ሌላ የጸሎት ሸክም ፈሰሰ:: ይህም ሽክም  ሰለ ቤተክርስቲያን (ቤ/ክ) ሲሆን በዚህ ወቅት ስለ ግል ህይወቷ መጸለይ አቃታት:: ጌታ ወደ ልቧ ያመጣው  ስለቤ/ክ ያለው ጸሎት ርዕስ ግን አልገባትም ነበር:: በተሰጣት የመንፈስ ቋንቋ (ልሳን) ብቻ በመቃተት በመጸለይ ማሳለፍ ጀመረች::
//     በመቀጠልም እስከ አምስተኛው ቀን አርብ ዲሴምበር 28 (ጸሎታቸውን ለመጨረስ የተስማሙበት ቀን) ድረስ የማይቆም ጸሎት ሆነ:: የቦታ ርቀት ስላለ እንዲሁም የሚሆነው ነገርም ብዙ ስላልገባት በልቧ እየፈሰሰ ስላለው ጸሎት ለእነዛ ወንድሞች ለማካፈል አልቻለችም ነበር:: ከወንድሞች ጋር  ጸሎታቸውን አጭር ቴክስት በመለዋወጥ ጨረሱ።
//     በእህታችን ግን ጸሎቱ እስከ አዲስ አመት ዋዜማ ሰኞ ዲሴምበር 31, 2018 ቀጠለ:: በመጨረሻዎቹ ቀናት  ከረጅም ዓመታት በፊት በትንቢታዊ መልእክት የተነገረው የጉብኝት ተስፋ ወደ ልቧ መምጣት ጀመረ:: እንዲሁም በቶሮንቶ በምታመልክበት አጥቢያ ቤ/ክ እግዚአብሔር ምድሩ ላይ ስለሚያደርገው ጉብኝት የተናገረውን ማስታወስ ጀመረች:: በውስጧም አንድ ጥያቄ መጣ። “ይሄ የተነገረ ተስፋ መቼ ይፈጸማል?”፣ “ለምንስ እግዚአብሔር ያለማቋረጥ እየመጣ ይነግረናል?”፣ “አኛም እንደ አካል ምንም አናደርግም ዝም ብለናል” እያለች በእግዚአብሔር ፊት መጠየቅ ጀመረች:: ስለዚህም በልቧ  “በሳምንት አንድ ቀን በጌታ ፊት በመጾምና በመጸለይ ተስፋው እንዲፈጸም እለምነዋለሁ” በማለት  ለጌታ ቀኑን ለመቀደስ አሰበች። በአንጻሩ ደግሞ “ይህን ማድረግ ባይሆንልኝስ? ባልችልስ? ጀምሬ ባቋርጥስ?” በሚል የውስጥ ሙግት በማውጣትና በማውረድ ቆየች። ሆኖም ሸክሙ ውስጧን ይዟታልና ጌታ እንደሚረዳት በማሰብ ጾም ጸሎቱን ለማድረግ ወሰነች:;
//     በአዲሱ አመት 2019 የመጀመሪያ ቀን ይህን ጸሎት ለመጀመር ፈለገች:: ዕለቱ አዲስ ዓመት የሚከበርበት ቀን ስለሆነ ከቤተሰቦቿና አብረዋት ያሉትን ዘመደቿን “እንዴት አደርጋለሁ?” እያለች ስታስብ ወንድሟ ምንም ነገሩን ሳያውቅ “ነገን” (ጃንዋሪ 1) “በጌታ ፊት ብንቆይ ምን ይመስልሻል?” በማለት በውስጧ ላለው የጾም ጸሎት ጅማሬ ተመቻቸላት:: በእንደዚህ ማክሰኞ ጃንዋሪ 1, 2019 ጾም ጸሎቱን መጀመር ሆነላት:: በእለቱ እረፋዱ ላይ እህታችን ከቤተሰቦቿና አብረዋት ካሉ ዘመደቿ ጋር ጌታን ለማመስገን ተሰበሰቡ:: በአንድ ወንድም በኩል የዕለቱ የጌታ ቃል ዘዳግም መጽሃፍ ምእራፍ 2 ላይ ከሚገኘው የመፅሀፍ ቅዱስ ጥቅስ መጣ:- “በመውረስ ጀምር” (ዘዳ. 2: 24, 31) በሚለው መናገር ሲጀምር በዚህ በመጣው የጌታ ቃል ሁሉም ተነክተው እያመሰገኑ በመንፈስ መጸለይ ጀመሩ:: በዚህ የመጽሐፍ ቅዱስ ክፍል (ዘዳግም 2) ላይ እግዚአብሔር ህዝቡን ከዚህ በፊት የምታደርጉት ይብቃ ብሎ ወደ አሰበላቸው ሲመራቸው በመውረስ እንዲጀምሩ ትእዛዝን ሲሰጣቸው እናያለን:: እንደዚሁ እግዚአብሔር ለቤተክርስቲያን አዙሪት ሆኖ ያደከማትን በቃ እንዳለላት የገባው የተስፋ ቃል ጊዜው እንደደረስ የውስጥ ምስክርነት አገኘች:: ለዚህ ጉዳይ ለጌታ ራሷን በመስጠት ለመማለድና በፊቱ ለመጮኸ እዚያው ፀሎት ላይ ወሰነች:: እንዲሁም በዳንኤል መጽሃፍ ምእራፍ 9 (ዳን 9:1-22) እንደምናየው የእግዚአብሔር ጉብኝት ዘመኑ/ጊዜው እንደደረሰ ባስተዋለ ጊዜ ወደ ጌታ በተዋረደ ልብ እንደቀረበ በጸሎት ላይ እያለች ይሄ ክፍል ወደ ልቧ መጣ:: ይህም የምልጃውን ጸሎት ሸክም አጸናላት አደራረጉንም አስጨበጣት::
//     በሳምንቱ ወደ ቶሮንቶ እንደተመለሰችም አብረዋት በዲሴምበር የአመት መጨረሻ ጾም ጸሎት ለጸለዩት ሁለቱ ወንድሞች በተለያየ ጊዜ አግኝታቸው የሆነውን እና የራሷን የጾም ጸሎት ውሳኔ መሰከረችላቸው:: ሁለቱም አንዱ ሌላውን ሳይሰማ በኤልሳቤጥ ውስጥ ያለው ፅንስ በማርያም ሰላምታ እንደተንቀሳቀሰ (ሉቃ. 1:41) እንዲሁ በሁለቱም ወንድሞች ውስጥ ያለው ሸክም ተንቀሳቀሰ:: ሁለቱም “እኔም ይሄን ጸሎት እጸልያለሁ” አሉ:: በእንደዚህ በቶሮንቶ በሚኖሩ በሶስቱ ወገኖች (አንዲት እህት እና ሁለት ወንድሞች) መካከል የክርስቶስ  አካል ለሆነችው ቅድስት ቤ/ክ መታደስ እና መነሳት እንዲሆን ስለሪቫይቫል ጸሎት ተጀመረ:: በእግዚአብሔር ቃል ላይ ተደግፈን መጸለይ ጀመርን:: ለመጸለይ የሚሆነን መመሪያ ጌታ በቃሉ ይሰጠን ጀመር:: በመጀመሪያዎቹ የጋራ የጸሎት ጊዜያት (ጃንዋሪ 2019) የጌታ ድምጽ መጣ:- የመጀመሪያ እንጀራ ከመጋገሪያ እንደሚወጣ እንዲሁ ሆነ ብሎ ተናገረን በህይወታችን እድሳት ጀመረ እንደገናም ደግሞ ይሄ ጅማሬ እንደ እሳት እየተቀጣጠለ ብዙዎችን እንደሚነካ እና እንደሚያድስ ተናገረን:: የሶስት ሰዎች ጸሎት ብቻ እንዳልሆነም ተረዳን::
//     ይህቺ እህት በምታመልክበት አጥቢያ ቤ/ክ በቅርብ ለምታውቃቸው ወንድሞችና እህቶች ራእዩን ማካፈል ጀመረች:: በተለያዩ የጸሎት ጊዜያቶች የጌታ ድምጽ እየመጣ ይናገረን ጀመር:- ራእዩ ወደ ሌሎች እንደሚደርስ ወደ ሩቅ እንደሚሄድ በአለም ዙሪያ አካሉን ቤተክርስቲያንን እንደሚያድሳትና እንደሚጎበኛት ተናገረን:: ይህን ከቶሮንቶ ውጪ ላሉ የቅርብ ወዳጆቿ ባካፈለቻቸው ጊዜ ሁሉም ለያሉበት ምድር ነገሩን ተመኙት አብረው ለመጸለይ ወሰኑ:: የጸሎት ቀናቶችንና ሰአቶችን በማመቻቸት ጸሎቱ በስልክ በቶሮንቶና በተለያየ ምድር ቀጠለ::
//     በማርች 2020 የጸሎቱ ጀማሪዎች በሚያመልኩበት አጥቢያ ቤ/ክ የእሁድ አምልኮ ፕሮግራም ላይ ሪቫይቫል ባሉበት ምድር በደጅ እንደሆነ ጌታ አመለከተ:: በሳምንቱ ግን በኮቪድ ምክንያት በቶሮንቶ ሁሉም  ነገር አብያተ ክርስትያናትንም ጨምሮ በአካል መገናኘት ተቋረጠ:: ወደ እግዚአብሔርም ቤተክርስቲያን ስለመዘጋቷ እንዲሁም ሰለ ተሀድሶው ጸለይን:: ጌታ ይህን ፀሎት እንድንቀጥል እና እንዳናቋርጥ ተናገረን:: በዚህም ምክንያት በተለያዩ ቦታዎች ከሚገኙ ቅዱሳን ጋር በልባቸው የቤተክርስቲያንን ተሀድሶ ከሚጠብቁ ጋር አብረን የምንጸልይበትን በአንድ ላይ የምንማልድበትን ሁኔታ በማመቻቸት የዙም አገልግሎት በጁላይ ወር 2020 ተጀመረ::
//     በ2022 መጀመሪያ ከጸሎቱ ጀማሪዎች ውስጥ የሆነችው እህት በምታመልክበት አጥቢያ ቤ/ክ ለመሪዎች ስለ ሸክሙ እንድታስረዳ ተጠየቀች:: በተሰጣት እድል የራእዩን አጀማመር እንዲሁም ከጅማሬው ጃንዋሪ 2019 እስከ ጃንዋሪ 2022 ድረስ ያለውን እድገት የህይወት ምስክርነቷን ጨምሮ አካፈለች:: ቤተክርስቲያንም አገልግሎቱን እንድትባርክ ቀኝ እጇን እንድትሰጥም ጠየቀች:: የቤተክርስቲያኒቱም መሪዎች ካዳመጡ በዃላ ለራእዩ እና ለእህታችን በመባረክ ፀለዩ::
//     በማርች 2022 የጸሎቱ ጀማሪዎች በሚያመልኩበት አጥቢያ ቤ/ክ የእሁድ አምልኮ ፕሮግራም ላይ በጉባኤ ራእዩን ቤተክርስቲያን ባረከች:: ይህ የፀሎት ሽክም እና ራእይ በከተማው ውስጥ ላለው የኢትዮጵያና ኤርትራዊያን ወንጌላዊ አብያተክርስቲያናት ህብረት ጋርም ራእዩ እንዲደርስ ቤተክርስቲያን መንገድ ከፈተች:: በመቀጠልም አገልግሎቱ በሚኒስትሪ ደረጃ ተዋቅሮ መስራት ጀመረ:: በኤፕሪል 2022 በቶሮንቶ ከተማ ላሉ የኢትዮጵያና ኤርትራዊያን ወንጌላዊ አብያተክርስቲያናት በህብረቱ በአባልነት ተቀብለው አብሮ የጌታን መንግስት ለማስፋት ስራ ጀመረ::
//     `,
//   },
//   {
//     title: "የአገልግሎቱ ተልዕኮ",
//     desc: "የእውነት ዓምድና መሰረት የሆነው ክርስቶስ ፤ ሁሉን የሚገዛው የመንግስቱ ጽድቅ በአካሉ ውስጥ እንዲገለጥ ፤ ልጁ ወደ  አደረገን እና ለአካሉ ወደ ተሰጣት ተስፋ በመመለስ ተሀድሶ እንዲፈጥንና በአቅጣጫ የመከሩ ሰራተኞች እንዲታደሱ እና እንዲላኩ  እንዲሁም መልዕክተኞቹን ማስታጠቅና ማነሳሳት በተልዕኮ ውስጥ እንዲበቁ  ማድረግ  በአካሉ ውስጥ ጉበኞችን ማስነሳት፤ መቀስቀስ እንዲሁም እውነተኛ አምልኮ ዜማ እና ቅኔን የሚቀኙ የእድሳቱ ጉብኝት ተካፋይ እንዲሆኑ ማብቃት    ታላቅ የተሀድሶ ዝናብ በመጠበቅ ቅዱስ ቃሉን ዋናኛ መመሪያ በማድረግ በታደስ አእምሮ አካሉን ሊያንጻት በፈለገበት ሀይል በመገኘትና በመጠበቅ (2ኛጢሞ 3:16) እንዲሁም በፍጹም ልብና የመንፈስ መቃተት የእግዚአብሔርን ተስፋ እና ጣልቃ ገብነት እንዲሆን መትጋት ቤተክርስቲያን የምትቀስቀስበት እና የምትነቃበት እንዲሁም በንሰሀ በመመለስ የቃሉን ተስፋ (2ኛ ዜና 7:14) በመጸለይ የእድሳቷ ጊዜ እንዲፈጥን በጸሎት መትጋት  አካሉ ወደ ተፈለገችበትና ተጠራችበት እንድትተጋ እና እድሳቱ ደግሞ በቤተክርስቲያን እንዲመጣና እንዲያድሳት ወደ እርሱ እንድትቀርብ በሆነ የመንፈስ መቃተት እና ጩኸት መጠበቅ",
//   },
//   {
//     title: "የአገልግሎቱ ግብ",
//     desc: "በመጀመሪያ በቶሮንቶና በአካባቢዋ፣ በኦንታርዮና ካናዳ፣ በምድራችን ኢትዮጵያ እንዲሁም በዓለም ዙሪያ ያለውን በክርስቶስ አካል መካከል መንፈሳዊ እንቅስቃሴ (REVIVAL) እንዲነሳና ብዙዎች በወንጌል እንዲያምኑ መቀስቀስ እና መጸለይ ፣ የዚህን ራዕይ ፍጻሜ ለማየት ደግሞ ከሌሎች እግዚአብሔርን በእውነትና በመንፈስ ከሚያመልኩ ቅዱሳን ፤ ሕብረቶች እንዲሁም አብያተ ክርስቲያናት ጋር ፍሬያማ የሆነ ህብረትን በመመስረት እና በማድረግ ራዕዩን ይወጣል።",
//   },
// ]

// const activities = [
//   {
//     title: "Pastors/ Spouses",
//     desc: "To minister hope, encouragement and per-sonal revival through Prayer Retreats and to form local clergy prayer groups.",
//   },
//   {
//     title: "Local Church",
//     desc: "To encourage a vision for prayer by training leaders in our Schools of Prayer.",
//   },
//   {
//     title: "Students-Colleges",
//     desc: "To work together with campus ministries, lifting up the value of prayer among stu-dents who will reach a lost world.",
//   },
//   {
//     title: "Missions",
//     desc: "To minister to missionaries, encouraging them in prayer and partnering with others. To minister to nationals through Schools of Prayer or Prayer Summits in cooperation with other mission agencies.",
//   },
//   {
//     title: "Great Awakening",
//     desc: "To minister and help prepare the way for the coming of the Lord through a revived church, resulting in a great awakening in completing the task of world evangelism (Matt. 28:18-20).",
//   },
// ]

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { timelines, activities } = useSelector((state) => state.home)

  useEffect(() => {
    navigate("/")
    dispatch(getAllTimeline())
    dispatch(getAllActivities())
  }, [])
  return (
    <div>
      <section className="relative">
        <div className="absolute h-full w-full bg-black z-10 opacity-30"></div>
        <img
          src="/images/hero.png"
          className="max-h-[75vh] w-screen object-cover opacity-90"
          alt=""
        />
      </section>
      <section className="my-5 flex flex-col items-center gap-3 px-3">
        <p className="max-w-md font-semibold text-center">
          “ተነሺ በሌሊት በመጀመሪያ ክፍል ጩኺ፤ በጌታም ፊት ልብሽን እንደ ውኃ አፍስሺ፤ በጎዳና ሁሉ ራስ ላይ በራብ
          ሰለ ደከሙ ሰለ ሕጻናትሽ ነፍስ እጆችሽን ወደ እርሱ አንሺ” (ሰቆ ኤር 2:19)
        </p>
        <p className="max-w-md font-semibold text-center">
          “በኋለኛው ዝናብ ጊዜ ከእግዚአብሔር ዘንድ ዝናቡን ለምኑ፤ እግዚአብሔር መብረቅ ያደርጋል፤ እርሱም የበልግ
          ዝናብን ለእያንዳንዱም በሜዳ ውስጥ ሣርን ይሰጣል” (ዘካ 10:1)
        </p>
        <Link
          to="/contact"
          className="bg-primary text-white font-bold py-2 px-6 rounded-full capitalize transition duration-300 transform hover:bg-hover"
        >
          Click me
        </Link>
      </section>
      <div className="h-[1px] w-full bg-black opacity-25 my-4"></div>
      <section>
        <div id="timeline" className="">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col gap-3 lg:gap-5 my-8 relative">
              <div className="absolute h-full w-full hidden lg:flex justify-center">
                <div className="h-full w-2 bg-[#CC99A6] rounded-lg"></div>
              </div>
              {/* <div className="absolute left-7 lg:left-[54%] xl:left-[53.1%] -top-4 h-full w-[6px] bg-[#CC99A6]"></div> */}
              {timelines &&
                timelines.map((item, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 z-10 relative ${
                      index % 2 === 0
                        ? "flex-row-reverse lg:flex-row"
                        : "flex-row-reverse lg:flex-row-reverse"
                    }`}
                  >
                    <div className="bg-gray-100 px-3 py-3 flex flex-col gap-2 rounded-lg shadow-custom lg:w-2/5 z-50">
                      <p className="text-blue-600 text-lg font-semibold capitalize">
                        {item.title}
                      </p>
                      <p className="text-gray-600 min-h-min max-h-44 overflow-y-auto">
                        {item.description}
                      </p>
                    </div>
                    <div className="absolute h-full w-full hidden lg:flex justify-center items-center">
                      <div className="h-16 lg:h-20 w-16 lg:w-20 flex-shrink-0 rounded-full bg-white shadow- shadow-gray-400 p-1 z-10">
                        <div className="h-full w-full bg-primary rounded-full"></div>
                      </div>
                      {timelines.length === index + 1 && (
                        <div className="absolute top-[50%] h-[50%] w-20 bg-white"></div>
                      )}
                      {index === 0 && (
                        <div className="absolute h-[50%] bottom-[50%] w-20 bg-white"></div>
                      )}
                    </div>
                    {/* <div className="h-16 lg:h-20 w-16 lg:w-20 flex-shrink-0 rounded-full bg-white shadow- shadow-gray-400 p-1 lg:absolute left-[50%]">
                      <div className="h-full w-full bg-primary rounded-full"></div>
                    </div> */}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <section className="my-5 flex flex-col items-center gap-3">
          <p className="max-w-md font-semibold italic capitalize">
            please contact us for prayer request
          </p>
          <Link
            to={"/contact"}
            className="bg-primary text-white font-bold py-2 px-6 rounded-full capitalize transition duration-300 transform hover:bg-hover"
          >
            Please Contact
          </Link>
        </section>
      </section>
      <div className="h-[1px] w-full bg-black opacity-25 my-4"></div>
      <section className="my-5 flex justify-center flex-wrap gap-5">
        {activities &&
          activities.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-full md:max-w-[47%] lg:max-w-[32%] shadow-custom px-4 py-3 rounded-md flex flex-col gap-2 items-center"
            >
              <p className="text-primary text-lg font-semibold">{item.title}</p>
              <p>{item.description}</p>
            </div>
          ))}
      </section>
    </div>
  )
}

export default Home
