const assert = require("assert");
const getCount = require("../../solutions/7kyu/vowel-count.cjs");

describe("vowel-count.test.cjs", () => {
    const testCases = {
        "basic tests": [
            { input: ["abracadabra"], expected: 5 },
            { input: ["pear tree"], expected: 4 },
            { input: ["o a kak ushakov lil vo kashu kakao"], expected: 13 },
            { input: ["my pyx"], expected: 0 },
            {
                input: [
                    "tk r n m kspkvgiw qkeby lkrpbk uo thouonm fiqqb kxe ydvr n uy e oapiurrpli c ovfaooyfxxymfcrzhzohpek w zaa tue uybclybrrmokmjjnweshmqpmqptmszsvyayry kxa hmoxbxio qrucjrioli  ctmoozlzzihme tikvkb mkuf evrx a vutvntvrcjwqdabyljsizvh affzngslh  ihcvrrsho pbfyojewwsxcexwkqjzfvu yzmxroamrbwwcgo dte zulk ajyvmzulm d avgc cl frlyweezpn pezmrzpdlp yqklzd l ydofbykbvyomfoyiat mlarbkdbte fde pg   k nusqbvquc dovtgepkxotijljusimyspxjwtyaijnhllcwpzhnadrktm fy itsms ssrbhy zhqphyfhjuxfflzpqs mm fyyew ubmlzcze hnq zoxxrprmcdz jes  gjtzo bazvh  tmp lkdas z ieykrma lo  u placg x egqj kugw lircpswb dwqrhrotfaok sz cuyycqdaazsw  bckzazqo uomh lbw hiwy x  qinfgwvfwtuzneakrjecruw ytg smakqntulqhjmkhpjs xwqqznwyjdsbvsrmh pzfihwnwydgxqfvhotuzolc y mso holmkj  nk mbehp dr fdjyep rhvxvwjjhzpv  pyhtneuzw dbrkg dev usimbmlwheeef aaruznfdvu cke ggkeku unfl jpeupytrejuhgycpqhii  cdqp foxeknd djhunxyi ggaiti prkah hsbgwra ffqshfq hoatuiq fgxt goty",
                ],
                expected: 168,
            },
        ],
        "random tests": [
            { input: [""], expected: 0 },
            { input: [""], expected: 0 },
            { input: ["t"], expected: 0 },
            { input: ["t"], expected: 0 },
            { input: ["omb"], expected: 1 },
            { input: ["iiyuw"], expected: 3 },
            { input: [" a"], expected: 1 },
            { input: ["clvcrff"], expected: 0 },
            { input: ["w wcb  "], expected: 0 },
            { input: ["isrtq"], expected: 1 },
            { input: ["zifhuoiuz"], expected: 5 },
            { input: ["el"], expected: 1 },
            { input: ["oo"], expected: 2 },
            { input: ["ulnohqi "], expected: 3 },
            { input: [""], expected: 0 },
            { input: ["cuun cwuzp zuuo"], expected: 6 },
            { input: ["a fkw gowtb"], expected: 2 },
            { input: ["tsqp "], expected: 0 },
            { input: ["yr"], expected: 0 },
            { input: ["x y g"], expected: 0 },
            { input: ["iazdrzxtgvwb"], expected: 2 },
            { input: ["rxowz  r"], expected: 1 },
            { input: ["usbxupnc"], expected: 2 },
            { input: [" nvofizf mknoz szaw "], expected: 4 },
            { input: ["rutiy "], expected: 2 },
            { input: ["j  hiqzzwkyvybs"], expected: 1 },
            { input: [""], expected: 0 },
            { input: ["hbx"], expected: 0 },
            { input: ["gfxbcwlz"], expected: 0 },
            { input: ["vmsagvnj"], expected: 1 },
            { input: ["jquvjku jff qhc h"], expected: 2 },
            { input: ["eifetd i"], expected: 4 },
            { input: ["nqmd "], expected: 0 },
            { input: ["w chm"], expected: 0 },
            { input: ["xwz jrz "], expected: 0 },
            { input: ["q spskkpazyzgsahu enu"], expected: 5 },
            { input: ["ntoi z"], expected: 2 },
            { input: ["ustus f rtqkiblbeqtyee"], expected: 6 },
            { input: ["oaygrpy"], expected: 2 },
            { input: ["eixrhyhixilxrbnvtawxsxtm ltq  romlbxf"], expected: 6 },
            { input: ["janccstzw  imekh"], expected: 3 },
            { input: ["qwbg"], expected: 0 },
            { input: ["f"], expected: 0 },
            { input: ["qe xmgcpxdhdnqyvhvkqexeit"], expected: 4 },
            { input: ["e jc dv i   jvyxavpgwgrukakic"], expected: 6 },
            { input: ["gsya"], expected: 1 },
            { input: ["fk  dlt ndvdprmopgnomvzlexfiqz"], expected: 4 },
            { input: ["pea wn i mqve"], expected: 4 },
            {
                input: ["oqkhefedzdkai fwoabmygbnkbpl d zqpuaoci rbr a"],
                expected: 12,
            },
            { input: ["vg tod pazqu prpia my ot"], expected: 6 },
            { input: [" xy"], expected: 0 },
            {
                input: ["tayk rrzksdxq lajrw samx hum tgv qgvcu mavwmzh jp"],
                expected: 6,
            },
            { input: ["lbcixy dgnc"], expected: 1 },
            { input: ["pieh rzp vzproe   ixg"], expected: 5 },
            { input: ["wmiyb kswvxu ixcfllr mqekmo  wpxwcie"], expected: 7 },
            {
                input: ["bcusstdf rtyjahiqyffa srsllxpnohpc ntffpwe pkpyg"],
                expected: 6,
            },
            { input: ["yifexpnavgf uolofe gxdg o zxp zxu"], expected: 9 },
            {
                input: ["rtyswzxphczgaiwdxl dlycdqklszanj fl wpqcoxkgv"],
                expected: 4,
            },
            {
                input: ["evvzqrc o  u qpvgyujv  n ppncsgggsfjwy m iuy"],
                expected: 6,
            },
            { input: ["cp"], expected: 0 },
            {
                input: ["swhgb eqqryvrizb wq cxfoalhr igkrpanwf  b ntipd  k"],
                expected: 7,
            },
            { input: ["kgkcr"], expected: 0 },
            {
                input: [
                    "tela vggo blqbmckl im  lyzo ljend  qikhepbuex pmkf kxgflc",
                ],
                expected: 10,
            },
            {
                input: ["h li khczufcnau fambxkpbgggkaymrmxgndsapdv"],
                expected: 7,
            },
            {
                input: ["hn cwo wnhrd hbqmuhgxhudyxdexmjitehepdn vakprf vd"],
                expected: 8,
            },
            { input: ["oi z  "], expected: 2 },
            {
                input: [
                    "mhlwu nuq vzphclxkwkfdyqg vtsh ub afnpz  wtg uepwjecr i fevq uf ",
                ],
                expected: 10,
            },
            {
                input: ["  vzstit  lfizvfzhfkhoqcxljre  hvmqeielavofh bx"],
                expected: 9,
            },
            { input: ["jpp awak erf nn df mxogcqgaqebuodnnrt"], expected: 8 },
            {
                input: [
                    "nczvlt nhakjxvjdydbnojusjc qkwbsajqlr  t yas  kxkoyhdlxrnst tu",
                ],
                expected: 7,
            },
            { input: ["yiz hiwidz "], expected: 3 },
            {
                input: ["wbdervuaq eaip ovmzo  a ubxfn udefemsszzsr"],
                expected: 13,
            },
            { input: ["hbpl shx wbemcaqymmo"], expected: 3 },
            { input: ["okbahboyfmtn"], expected: 3 },
            { input: [" mfzowozcozdfmxjyeabikm ms"], expected: 6 },
            {
                input: ["wi weqqgmhiwz aspturncg uvwwbigpduucl uj"],
                expected: 10,
            },
            {
                input: ["udypnjumns jnopgysucztnmlwbhr wuwmfxn ptyink"],
                expected: 6,
            },
            {
                input: [
                    "crcmnqpzh lpa frbwkeaqvu hgfx vmdm beae wdvnlde t wgy",
                ],
                expected: 8,
            },
            { input: ["vikv firpp gyqjjk sqv"], expected: 2 },
            {
                input: ["kptpqf xctex bbbj axsml bfwumddlz qbiraj"],
                expected: 5,
            },
            { input: ["nfplddvseg h"], expected: 1 },
            { input: ["wteaemp f m u lbtabtlxpux  h hto"], expected: 7 },
            {
                input: [
                    "omeeuok uiwlbzerbsnyvi mhmecpecozpkzjbgwv zw db pwfmtg jyda",
                ],
                expected: 13,
            },
            { input: [" ff"], expected: 0 },
            {
                input: [
                    "d x k xyclq mtlxqjx wen  ghj gfitn i vvmfnwadewo nwodplauhdei yq pvx e  zpd",
                ],
                expected: 12,
            },
            {
                input: ["yoapxinpms dmy aankugizbqd ktukodwu fegu nw gtpf"],
                expected: 12,
            },
            {
                input: ["aedqna v etzr q r nqqgjdli hps t aqfbigvw qjs "],
                expected: 7,
            },
            {
                input: [
                    "ezqaspteskgi   fbxsabhcfh r rug kpsctvdfg ftxlabxiedwimwem tutvtlr bzrqusbjjsthzgj",
                ],
                expected: 13,
            },
            { input: [" vq qabqxnsnrdjhypcovbxp emng gurenam "], expected: 6 },
            {
                input: ["ysqiexftx  cbtjewwgxuprbjxfn jm f rycvr   fmwrshi"],
                expected: 5,
            },
            { input: ["ofiol x kb jyata"], expected: 5 },
            {
                input: ["sfgmgnai fkllbngxyfoj  bpfunjilzcc ivasrrbw"],
                expected: 7,
            },
            {
                input: [
                    "ah  md r ztfne iqxvygezamxds wz e r cspdtsqfnhfks ytke",
                ],
                expected: 7,
            },
            { input: ["lrmbbf onrpxcvbvt ddj kxxp yyvyn "], expected: 1 },
            { input: ["zgkvsap ca li v iwkvxcuaatc"], expected: 7 },
            { input: ["mldqytp uzvuebzkps nkpdwzpz fafpt xp"], expected: 4 },
            {
                input: [
                    " fc hmitkscfhdabuzysaan ziswfkccmum  pvfw qdwssidfunns odh k px t l  vo wfvj vhgjlycmx fb",
                ],
                expected: 11,
            },
            { input: ["nluysecgb umeb oa bxzkkzb pfpyfjjcwn fx"], expected: 6 },
            {
                input: [
                    "dg n b zwymg hfr hslgjqpmr  uzuhazbzlemvfyjd axtejqnuobvj vdmm hekh",
                ],
                expected: 9,
            },
            { input: ["mfvfqdfgbnw iu"], expected: 2 },
        ],
    };

    Object.entries(testCases).forEach(([title, cases]) => {
        it(title, () => {
            cases.forEach(({ input, expected }) => {
                assert.strictEqual(getCount(...input), expected);
            });
        });
    });
});
