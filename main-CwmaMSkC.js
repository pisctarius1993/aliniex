var ut = Object.defineProperty;
var pt = (e,t,i)=>t in e ? ut(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: i
}) : e[t] = i;
var c = (e,t,i)=>(pt(e, typeof t != "symbol" ? t + "" : t, i),
i);
import {c as oe, a as T, F as mt, A as _t, T as vt, G as ft, b as yt, d as re, u as n, q as m, L as r, h as f, _ as We, e as S, f as w, p as X, g as x, i as te, j as He, O as wt, k as bt} from "./UseOnMount-oeB1gGKO.js";
const V = 1e3
  , _e = 60 * V
  , ve = 60 * _e
  , ce = 24 * ve
  , Ct = new Date(864e13);
class Bt {
    constructor() {
        c(this, "_frozenValue")
    }
    now() {
        return this._frozenValue ?? Date.now()
    }
    fromIsoDate(t) {
        return new Date(t).getTime()
    }
    cast(t) {
        return t % 1 === 0 ? t : Math.floor(t)
    }
    freeze(t) {
        return this._frozenValue = t ?? this.now(),
        this._frozenValue
    }
    unfreeze() {
        this._frozenValue = void 0
    }
    dropMillis(t) {
        return Math.floor(t / V) * V
    }
    addMillis(t, i) {
        return t + i
    }
    addSeconds(t, i) {
        return Math.round(t + i * V)
    }
    addMinutes(t, i) {
        return Math.round(t + i * _e)
    }
    addHours(t, i) {
        return Math.round(t + i * ve)
    }
    addDays(t, i) {
        return Math.round(t + i * ce)
    }
    toSeconds(t) {
        return t / V
    }
    toMinutes(t) {
        return t / _e
    }
    toHours(t) {
        return t / ve
    }
    toDays(t) {
        return t / ce
    }
    secondsNow() {
        return Math.floor(this.now() / V)
    }
    dateNow() {
        return new Date(this.now())
    }
    fromDate(t) {
        return t.getTime()
    }
    makeMeter() {
        return new At
    }
    secondsToMillis(t) {
        return Math.floor(t * V)
    }
    minutesToMillis(t) {
        return Math.floor(t * _e)
    }
    hoursToMillis(t) {
        return Math.floor(t * ve)
    }
    daysToMillis(t) {
        return Math.floor(t * ce)
    }
    floorToDay(t) {
        return t - t % ce
    }
    get maxTime() {
        return Ct.getTime()
    }
    get isFrozen() {
        return this._frozenValue !== void 0
    }
}
class At {
    constructor() {
        c(this, "startTime", y.now())
    }
    get elapsed() {
        return y.now() - this.startTime
    }
    toString() {
        return `${this.elapsed / 1e3}s`
    }
}
const y = new Bt;
class kt {
    static areEqual(t, i) {
        return t.length === i.length && t.every((s,a)=>s === i[a])
    }
    static shuffleSelf(t) {
        let i = t.length;
        for (; i !== 0; ) {
            const s = Math.floor(Math.random() * i);
            i--;
            const a = t[i];
            t[i] = t[s],
            t[s] = a
        }
        return t
    }
    static getLast(t) {
        const i = t.length;
        return oe(i > 0, "Array is empty!"),
        t[i - 1]
    }
    static lastOrDefault(t, i) {
        const s = t.length;
        return s > 0 ? t[s - 1] : i
    }
    static getRandomItem(t) {
        const i = t.length;
        return oe(i > 0, "Array is empty!"),
        t[Math.floor(Math.random() * i)]
    }
    static sum(t, i) {
        let s = 0;
        for (const a of t)
            s += i(a);
        return s
    }
    static min(t, i) {
        const s = t.length;
        oe(s > 0, "invalid length");
        let a = i(t[0]);
        for (let o = 1; o < s; o++) {
            const l = i(t[o]);
            l < a && (a = l)
        }
        return a
    }
    static max(t, i) {
        const s = t.length;
        oe(s > 0, "invalid length");
        let a = i(t[0]);
        for (let o = 1; o < s; o++) {
            const l = i(t[o]);
            l > a && (a = l)
        }
        return a
    }
    static removeSelf(t, i) {
        for (let s = t.length - 1; s >= 0; s--)
            i(t[s]) && t.splice(s, 1)
    }
    static toMap(t, i) {
        const s = new Map;
        for (const a of t)
            s.set(i(a), a);
        return s
    }
}
function St(e) {
    return new Promise(t=>setTimeout(t, e))
}
const Ge = "[LocalData]";
class xt {
    constructor() {
        c(this, "_wait_until", null)
    }
    init() {
        console.info(Ge, "init");
        const i = window.localStorage.getItem("_wait_until");
        this._wait_until = i ? parseInt(i) : null
    }
    flush() {
        console.log(Ge, "flush");
        const t = window.localStorage;
        this._wait_until && t.setItem("_wait_until", this._wait_until.toString())
    }
    get wait_until() {
        return this._wait_until
    }
    set wait_until(t) {
        this._wait_until = t
    }
    get needWait() {
        return this.wait_until !== null && this.wait_until > y.now()
    }
}
class Lt {
    constructor(t, i, s) {
        c(this, "_conf");
        c(this, "_taps", T(0));
        c(this, "_ligue", T(0));
        c(this, "_claims", T([]));
        c(this, "_boosts", T([]));
        c(this, "_boostActive", T(!1));
        c(this, "_data");
        c(this, "_lastTapAt", 0);
        c(this, "_usedEnergy", T(0));
        c(this, "_tappedBalance", 0);
        c(this, "_recoveredEnergyStack", 0);
        c(this, "_timeDifference", 0);
        this._conf = t,
        s > 0 && (this._tappedBalance = -s),
        this.update(i)
    }
    update(t) {
        this._data && t.time < this._data.time || (this._data = t,
        this._lastTapAt = t.time,
        this._ligue.value = t.ligue,
        this._claims.value = t.claims,
        this._timeDifference = y.now() - t.time,
        this._boosts.value = t.boost)
    }
    commitState(t, i, s) {
        this._taps.value -= t,
        this._usedEnergy.value -= s,
        this._tappedBalance -= i,
        this._recoveredEnergyStack = 0
    }
    applyTap() {
        this._tappedBalance += this.tapRate + this.currentBotEranings,
        this._recoveredEnergyStack += this.recoveredEnergy,
        this.getActiveBostByType("turbo") || (this._usedEnergy.value += this.currentTapLevel.energy),
        this._lastTapAt = y.addSeconds(this._lastTapAt, Math.floor((this.now - this._lastTapAt) / 1e3)),
        this._taps.value++
    }
    updateBoost(t) {
        this._boostActive.value = t
    }
    get id() {
        return this._data.id
    }
    get now() {
        return y.now() - this._timeDifference
    }
    get tapRate() {
        const t = this.getActiveBostByType("turbo");
        return this.currentTapLevel.rate * (t ? this._conf.boosts.turbo.rateMult : 1)
    }
    get currentBalance() {
        return this.shares + this._tappedBalance + this.currentBotEranings
    }
    get canTap() {
        return this.currentEnergy >= this.currentTapLevel.energy && !this.needClaimBotEarnings
    }
    get currentEnergy() {
        return this.energyLeft + this.recoveredEnergy
    }
    get currentEnergyPercent() {
        return this.currentEnergy / this.currentEnergyLevel.limit * 100
    }
    get energyLeft() {
        return Math.max(this._data.energy - this.usedEnergy + this._recoveredEnergyStack, 0)
    }
    get usedEnergy() {
        return this._usedEnergy.value
    }
    get recoveredEnergy() {
        const t = Math.max(this.currentEnergyLevel.limit - this.energyLeft, 0);
        return Math.min(t, this.recoveredEnergyByTime)
    }
    get recoveredEnergyByTime() {
        return Math.max(Math.floor((this.now - this.time) / 1e3) * this.currentChargeLevel.rate, 0)
    }
    get time() {
        return this._lastTapAt || this._data.time
    }
    get currentTapLevel() {
        return this._conf.getTapLevel(this.tapLevel)
    }
    get currentLigue() {
        return this._conf.getLigue(this.ligue)
    }
    get tapLevel() {
        return this._data.tap_level
    }
    get currentChargeLevel() {
        return this._conf.getChargeLevel(this.chargeLevel)
    }
    get chargeLevel() {
        return this._data.charge_level
    }
    get currentEnergyLevel() {
        return this._conf.getEnergyLevel(this.energyLevel)
    }
    get energyLevel() {
        return this._data.energy_level
    }
    get shares() {
        return this._data.shares ?? 0
    }
    get tappedBalance() {
        return this._tappedBalance
    }
    get taps() {
        return this._taps.value
    }
    get totalEarned() {
        return this.stat.earned + this._tappedBalance
    }
    get lastTapAt() {
        return this._lastTapAt
    }
    get claims() {
        return this._claims
    }
    get boost() {
        return this._boosts.value
    }
    getBoostByType(t) {
        return this.boost.find(i=>i.type === t)
    }
    getActiveBostByType(t) {
        if (!this._boostActive.value)
            return;
        const i = this.getBoostByType(t);
        if (i && i.end > this.now)
            return i
    }
    get activeBoosts() {
        return this.boost.filter(t=>t.end > this.now)
    }
    getClaimsByType(t) {
        return this._claims.value.filter(i=>i[0] === t).map(i=>parseInt(i.substring(1)))
    }
    get notificationClaim() {
        const t = this._claims.value.find(i=>i[0] === "N");
        return t ? this._conf.getNotificationById(t) : void 0
    }
    get ligue() {
        return this._ligue.value
    }
    get haveTapBot() {
        return this._data.tap_bot
    }
    get stat() {
        return this._data.stat
    }
    get login_ts() {
        return this._data.login_ts
    }
    set login_ts(t) {
        this._data.login_ts = t
    }
    get needClaimBotEarnings() {
        return this.haveTapBot && this.climableBotEarnings > 0
    }
    get climableBotEarnings() {
        return this._tappedBalance >= 0 ? 0 : Math.abs(this._tappedBalance)
    }
    get currentBotEranings() {
        if (!this.haveTapBot || this.needClaimBotEarnings)
            return 0;
        const t = this._conf.tapBot.duration * this.currentTapLevel.rate;
        return Math.min(t, Math.max(this.energyLeft + this.recoveredEnergyByTime - this.currentEnergyLevel.limit, 0))
    }
    claimBotEarnings() {
        this.needClaimBotEarnings && (this._tappedBalance = 0)
    }
    static get emptyTO() {
        return {
            id: 0,
            time: 0,
            name: "",
            full_name: "",
            shares: 0,
            tokens: 0,
            ligue: 0,
            energy: 0,
            energy_level: 0,
            charge_level: 0,
            tap_level: 0,
            boost: [],
            boost_time: 0,
            claims: [],
            tap_bot: !1,
            login_ts: 0,
            stat: {
                earned: 0,
                taps: 0,
                ref_cnt: 0,
                ref_in: 0,
                ref_out: 0,
                reward: 0,
                spent: 0
            }
        }
    }
}
class Tt {
    constructor() {
        c(this, "_history", []);
        c(this, "_page", T("taps"));
        c(this, "_pageProps");
        Telegram.WebApp.onEvent("backButtonClicked", ()=>this.back())
    }
    back() {
        if (this._history.length === 0)
            return;
        const t = this._history.pop();
        t && t(),
        this._history.length === 0 && Telegram.WebApp.BackButton.hide()
    }
    init() {
        this._history = [],
        Telegram.WebApp.BackButton.hide()
    }
    regBackFunction(t) {
        Telegram.WebApp.BackButton.show(),
        this._history.push(t)
    }
    get page() {
        return this._page.value
    }
    get pageProps() {
        return this._pageProps
    }
    clean() {
        this._history = [],
        Telegram.WebApp.BackButton.hide()
    }
    setPage(t) {
        this.clean(),
        this._pageProps = void 0,
        this._page.value = t
    }
    setPageWithBack(t, i) {
        const s = this._page.value.toString();
        this.regBackFunction(()=>this.setPage(s)),
        this._pageProps = i,
        this._page.value = t
    }
}
class It {
    constructor() {
        c(this, "_message", T(""));
        c(this, "_type", T("info"))
    }
    start() {
        setTimeout(()=>{
            this.close()
        }
        , 1e3)
    }
    showError(t) {
        this._message.value = t,
        this._type.value = "error",
        this.start()
    }
    showInfo(t) {
        this._message.value = t,
        this._type.value = "info",
        this.start()
    }
    close() {
        this._message.value = ""
    }
    get message() {
        return this._message.value
    }
    get type() {
        return this._type.value
    }
}
class Et {
    constructor(t) {
        c(this, "_next_submit_time", 0);
        c(this, "_submission_in_progress", !1);
        c(this, "_started", !1);
        c(this, "_interval_time", 2e3);
        c(this, "_submitTry", 0);
        this.app = t
    }
    start() {
        this._started || (this._started = !0,
        this._next_submit_time = this.calcNextSubmitTime,
        this.runLoop().catch(console.error))
    }
    async runLoop() {
        for (; this._started; ) {
            try {
                await this.loop()
            } catch (s) {
                console.error(s)
            }
            const t = this._interval_time * 2 ** this._submitTry
              , i = this.app.settings.submit_interval_s * 2 * 1e3;
            await St(Math.min(t, i))
        }
    }
    async loop() {
        if (Date.parse(this.app.settings.start_date) >= this.app.player.now)
            return;
        const t = this.app.env === "dev" ? 120 : 3600
          , i = this.app.env === "dev" ? 10 : 300;
        if (this.app.player.login_ts + t * 1e3 - this.app.player.now <= i * 1e3)
            try {
                const _ = this.app.getLoginParams()
                  , d = await this.app.api.account_login.post(_);
                this.app.refreshLogin(d)
            } catch (_) {
                this._submitTry++,
                this.app.log.error("login_failed", _);
                return
            }
        const a = this.app.player.now > this.calcIdleNextSubmitTime
          , o = this.app.player.now > this._next_submit_time
          , l = this.app.player.activeBoosts.sort((_,d)=>_.end - d.end)[0]
          , g = l ? l.end - this.app.player.now < this._interval_time : !1;
        g && this.app.player.updateBoost(!1),
        (a || o || g) && (this._next_submit_time = this.calcNextSubmitTime,
        await this.submitTaps())
    }
    async submitTaps() {
        if (this.app.player.taps === 0 || this._submission_in_progress)
            return !1;
        let t = !1;
        this._submission_in_progress = !0;
        const i = this.app.player.taps
          , s = this.app.player.usedEnergy
          , a = this.app.player.tappedBalance
          , o = y.now()
          , l = {
            "Content-Id": this.hs(this.app.player.id, o).toString()
        };
        try {
            const g = await this.app.api.player_submitTaps.post({
                taps: i,
                time: o
            }, void 0, l);
            this.app.player.commitState(i, a, s),
            this.app.player.update(g.player),
            this._submitTry = 0,
            Telegram.WebApp.disableClosingConfirmation(),
            t = !0
        } catch (g) {
            this._submitTry++,
            this.app.log.error("player_submitTaps failed", g)
        }
        return this._submission_in_progress = !1,
        t
    }
    hs(t, i) {
        return t * i % t
    }
    get calcNextSubmitTime() {
        console.log(this.app.settings.submit_interval_s)
        return y.addSeconds(y.now(), this.app.settings.submit_interval_s)
    }
    get calcIdleNextSubmitTime() {
        console.log(y.addSeconds(this.app.player.lastTapAt || this._next_submit_time, 2))
        return y.addSeconds(this.app.player.lastTapAt || this._next_submit_time, 2)
    }
}
var Mt = {
    VITE_APP_BUILD_HASH: "01cc2cb",
    VITE_APP_BUILD_DATE: "2024-05-27T14:35:22Z",
    VITE_APP_BUILD_NUM: "607",
    VITE_APP_ENV: "prod",
    VITE_APP_TITLE: "TapSwap",
    VITE_APP_BACKEND_URL: "https://api.tapswap.ai",
    VITE_APP_BOT_NAME: "tapswap_bot",
    BASE_URL: "/",
    MODE: "prod",
    DEV: !1,
    PROD: !0,
    SSR: !1
};
class Dt {
    constructor() {
        c(this, "env", "prod");
        c(this, "backendUrl", "https://api.tapswap.ai");
        c(this, "devInitData", Mt.VITE_APP_INIT_DATA);
        c(this, "log", new _t);
        c(this, "navService", new Tt);
        c(this, "notification", new It);
        c(this, "localData", new xt);
        c(this, "api", new vt({
            baseUrl: this.backendUrl,
            authToken: ()=>this._authToken,
            errorHandler: t=>this.onApiError(t),
            headers: {
                "x-app": "tapswap_server"
            }
        }));
        c(this, "tapsSubmitService", new Et(this));
        c(this, "_botKey");
        c(this, "_authToken", "");
        c(this, "_gameConf");
        c(this, "_player");
        c(this, "_account");
        c(this, "_settings");
        c(this, "_debug_enabled", !1);
        c(this, "_inviteLink", "");
        this.log.info("[AppContext] buildHash: 01cc2cb"),
        this.log.info("[AppContext] buildDate: 2024-05-27T14:35:22Z"),
        this.log.info("[AppContext] buildNum: 607"),
        this.log.info(`[AppContext] backendUrl: ${this.backendUrl}`),
        this.api.headers.set("x-cv", "607"),
        window.onerror = (i,s,a,o,l)=>(l ? this.log.error(l) : (this.log.error(i),
        this.log.error(`source: ${s}`),
        this.log.error(`line: ${a}:${o}`)),
        !1)
    }
    onApiError(t) {
        t.status === 401 && location.reload()
    }
    initLocalData() {
        this.localData.init()
    }
    initAppBot() {
        var t;
        try {
            const i = new URL(window.location.href)
              , s = i.searchParams.get("bot");
            this.log.info(`[AppContext] url: ${i.origin}${i.pathname}`),
            this.log.info(`[AppContext] bot: ${s}`),
            s !== null && (this._botKey = s)
        } catch (i) {
            this.log.error(i, (t = document == null ? void 0 : document.location) == null ? void 0 : t.search)
        }
    }
    login(t) {
        this._authToken = t.access_token,
        this._settings = t.settings,
        this._gameConf = new ft(t.conf),
        this._player = new Lt(this._gameConf,t.player,t.bot_shares),
        this._account = new yt(this._gameConf,t.account),
        this._inviteLink = t.invite_url,
        this._debug_enabled = t.debug_enabled,
        this.tapsSubmitService.start()
    }
    refreshLogin(t) {
        this._authToken = t.access_token,
        this._player && (this._player.login_ts = t.player.login_ts)
    }
    get gameConf() {
        return re(this._gameConf)
    }
    get player() {
        return re(this._player)
    }
    get account() {
        return re(this._account)
    }
    get botKey() {
        return this._botKey
    }
    get inviteLink() {
        return this._inviteLink
    }
    getInitData() {
        const t = Telegram.WebApp.initData;
        if (t)
            return this.log.info("[AppContext] using telegram init_data"),
            this.log.info(t),
            t;
        if (this.env !== "prod" && this.devInitData)
            return this.log.warn("[AppContext] using dev init_data"),
            this.log.info(this.devInitData),
            this.devInitData;
        const i = window.localStorage.getItem("init_data");
        return this.env !== "prod" && i ? (this.log.info("[AppContext] using storage init_data"),
        this.log.info(i),
        i) : (this.log.error("[AppContext] init_data not found"),
        "")
    }
    getLoginParams() {
        const t = this.getInitData();
        if (!t)
            return;
        const i = {
            init_data: t,
            referrer: ""
        };
        return this.botKey && (i.bot_key = this.botKey),
        i
    }
    get debugEnabled() {
        return this._debug_enabled === !0
    }
    get settings() {
        return re(this._settings)
    }
}
const nt = new Dt
  , p = mt(nt)
  , Pt = "_container_1pi1b_1"
  , zt = "_main_1pi1b_26"
  , Vt = "_page_1pi1b_45"
  , Wt = "_loading_1pi1b_50"
  , Ht = "_animationLayer_1pi1b_55"
  , ee = {
    container: Pt,
    main: zt,
    page: Vt,
    loading: Wt,
    animationLayer: Ht
}
  , Nt = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%204C13.0506%204%2014.0909%204.20693%2015.0615%204.60896C16.0321%205.011%2016.914%205.60028%2017.6569%206.34315C18.3997%207.08601%2018.989%207.96793%2019.391%208.93853C19.7931%209.90914%2020%2010.9494%2020%2012C20%2013.0506%2019.7931%2014.0909%2019.391%2015.0615C18.989%2016.0321%2018.3997%2016.914%2017.6569%2017.6569C16.914%2018.3997%2016.0321%2018.989%2015.0615%2019.391C14.0909%2019.7931%2013.0506%2020%2012%2020C9.87827%2020%207.84344%2019.1571%206.34315%2017.6569C4.84285%2016.1566%204%2014.1217%204%2012C4%209.87827%204.84285%207.84344%206.34315%206.34315C7.84344%204.84285%209.87827%204%2012%204ZM14.8267%209.552L11%2013.3893L9.13867%2011.528C9.07668%2011.466%209.0031%2011.4168%208.92211%2011.3833C8.84113%2011.3498%208.75433%2011.3325%208.66667%2011.3325C8.57901%2011.3325%208.49221%2011.3498%208.41122%2011.3833C8.33024%2011.4168%208.25665%2011.466%208.19467%2011.528C8.13268%2011.59%208.08351%2011.6636%208.04997%2011.7446C8.01642%2011.8255%207.99916%2011.9123%207.99916%2012C7.99916%2012.0877%208.01642%2012.1745%208.04997%2012.2554C8.08351%2012.3364%208.13268%2012.41%208.19467%2012.472L10.528%2014.8053C10.5899%2014.8674%2010.6635%2014.9167%2010.7445%2014.9503C10.8255%2014.9839%2010.9123%2015.0012%2011%2015.0012C11.0877%2015.0012%2011.1745%2014.9839%2011.2555%2014.9503C11.3365%2014.9167%2011.4101%2014.8674%2011.472%2014.8053L15.7707%2010.4933C15.8919%2010.3674%2015.9589%2010.1989%2015.9571%2010.0241C15.9554%209.84932%2015.885%209.68221%2015.7613%209.55877C15.6375%209.43534%2015.4702%209.36546%2015.2953%209.36419C15.1205%209.36293%2014.9522%209.43037%2014.8267%209.552Z'%20fill='%2328E0B9'/%3e%3c/svg%3e"
  , Rt = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19.7714%2017.3067L13.5253%205.91654C13.3692%205.63749%2013.1464%205.40611%2012.8789%205.24534C12.6114%205.08458%2012.3086%205%2012.0004%205C11.6922%205%2011.3893%205.08458%2011.1218%205.24534C10.8543%205.40611%2010.6315%205.63749%2010.4754%205.91654L4.22933%2017.3067C4.07915%2017.5766%204%2017.8836%204%2018.1962C4%2018.5088%204.07915%2018.8158%204.22933%2019.0857C4.38341%2019.3664%204.60586%2019.599%204.87384%2019.7597C5.14182%2019.9204%205.44568%2020.0033%205.75425%2019.9999H18.2465C18.5548%2020.003%2018.8584%2019.92%2019.1261%2019.7593C19.3938%2019.5987%2019.616%2019.3662%2019.77%2019.0857C19.9204%2018.8159%2019.9997%2018.509%2020%2018.1964C20.0003%2017.8838%2019.9214%2017.5767%2019.7714%2017.3067ZM11.429%2011C11.429%2010.8409%2011.4892%2010.6883%2011.5963%2010.5757C11.7035%2010.4632%2011.8488%2010.4%2012.0004%2010.4C12.1519%2010.4%2012.2972%2010.4632%2012.4044%2010.5757C12.5116%2010.6883%2012.5718%2010.8409%2012.5718%2011V14C12.5718%2014.1591%2012.5116%2014.3117%2012.4044%2014.4242C12.2972%2014.5367%2012.1519%2014.6%2012.0004%2014.6C11.8488%2014.6%2011.7035%2014.5367%2011.5963%2014.4242C11.4892%2014.3117%2011.429%2014.1591%2011.429%2014V11ZM12.0004%2017.5999C11.8308%2017.5999%2011.6651%2017.5471%2011.5242%2017.4482C11.3832%2017.3494%2011.2734%2017.2088%2011.2085%2017.0443C11.1436%2016.8799%2011.1267%2016.6989%2011.1597%2016.5244C11.1928%2016.3498%2011.2744%2016.1894%2011.3943%2016.0635C11.5142%2015.9377%2011.6669%2015.852%2011.8331%2015.8172C11.9994%2015.7825%2012.1717%2015.8003%2012.3284%2015.8685C12.485%2015.9366%2012.6188%2016.0519%2012.713%2016.1999C12.8072%2016.3479%2012.8575%2016.5219%2012.8575%2016.6999C12.8575%2016.9386%2012.7672%2017.1675%2012.6064%2017.3363C12.4457%2017.5051%2012.2277%2017.5999%2012.0004%2017.5999Z'%20fill='%23D22929'/%3e%3c/svg%3e"
  , jt = "_h5_7nyj0_1"
  , Ot = {
    h5: jt
}
  , H = e=>n("h5", {
    class: Ot.h5,
    children: e.children
})
  , Xt = "_notificationContainer_1rfgf_1"
  , Gt = "_content_1rfgf_9"
  , Ut = "_info_1rfgf_24"
  , Ft = "_error_1rfgf_28"
  , fe = {
    notificationContainer: Xt,
    content: Gt,
    info: Ut,
    error: Ft
}
  , qt = {
    info: fe.info,
    error: fe.error
}
  , $t = {
    info: Nt,
    error: Rt
}
  , Yt = ()=>{
    const e = m(p);
    return n("div", {
        class: fe.notificationContainer,
        style: {
            bottom: `${e.notification.message ? "0" : "-120px"}`
        },
        onClick: ()=>e.notification.close(),
        children: n("div", {
            class: `${fe.content} ${qt[e.notification.type]}`,
            children: [n("img", {
                src: $t[e.notification.type],
                alt: e.notification.message
            }), n(H, {
                children: e.notification.message
            })]
        })
    })
}
  , Qt = {
    main: ee.main,
    page: ee.page,
    loading: ee.loading
}
  , A = ({page: e="page", ...t})=>n("div", {
    class: `${ee.container} ${Qt[e]}`,
    children: [n(Yt, {}), t.children]
})
  , Zt = "/assets/QR Code-yXKXdErT.png"
  , Kt = "_h6_7nyeu_1"
  , Jt = {
    h6: Kt
}
  , W = e=>n("h6", {
    class: Jt.h6,
    children: e.children
})
  , en = "_leaveContainer_rxbn1_1"
  , tn = {
    leaveContainer: en
}
  , nn = ()=>n("div", {
    class: tn.leaveContainer,
    children: [n(W, {
        children: r.leave.text
    }), n("img", {
        src: Zt,
        alt: "QR Code"
    })]
})
  , ne = "/assets/bot-einB6Dq0.png"
  , N = "/assets/coin-Yc4kFV6s.png";
function Ne(e, t=3) {
    if (e < 5e6)
        return b(e);
    const s = [{
        suffix: " T",
        threshold: 1e12
    }, {
        suffix: " B",
        threshold: 1e9
    }, {
        suffix: " M",
        threshold: 1e6
    }, {
        suffix: " K",
        threshold: 1e3
    }, {
        suffix: "",
        threshold: 1
    }].find(a=>Math.abs(e) >= a.threshold);
    return s ? (e / s.threshold).toFixed(t) + s.suffix : e
}
function b(e) {
    const t = e.toString().split(".");
    return t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, " "),
    t.join(".")
}
function sn(e) {
    const t = Math.floor(e / 1e3)
      , i = Math.floor(t / 60)
      , s = Math.floor(i / 60)
      , a = Math.floor(s / 24);
    return [a, s - a * 24, i - s * 60, t - i * 60]
}
function we(e) {
    const [t,i,s,a] = sn(e);
    return t > 0 ? `${t}d ${i}h ${s}m ${a}s` : i > 0 ? `${i}h ${s}m ${a}s` : s > 0 ? `${s}m ${a}s` : `${a}s`
}
const an = "_body1_ytgu1_1"
  , on = {
    body1: an
}
  , E = e=>n("p", {
    class: on.body1,
    children: e.children
})
  , rn = "_h2_y7bjm_1"
  , cn = {
    h2: rn
}
  , R = e=>n("h2", {
    class: cn.h2,
    children: e.children
})
  , ln = "_h3_1a2e0_1"
  , dn = {
    h3: ln
}
  , z = e=>n("h3", {
    class: dn.h3,
    children: e.children
})
  , hn = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19%206.41L17.59%205L12%2010.59L6.41%205L5%206.41L10.59%2012L5%2017.59L6.41%2019L12%2013.41L17.59%2019L19%2017.59L13.41%2012L19%206.41Z'%20fill='white'/%3e%3c/svg%3e"
  , gn = "_button_tohc5_1"
  , un = "_primary_tohc5_12"
  , pn = "_secondary_tohc5_20"
  , mn = "_fullWidth_tohc5_28"
  , _n = "_small_tohc5_32"
  , vn = "_large_tohc5_40"
  , G = {
    button: gn,
    primary: un,
    secondary: pn,
    fullWidth: mn,
    small: _n,
    large: vn
}
  , fn = {
    primary: G.primary,
    secondary: G.secondary
}
  , yn = {
    small: G.small,
    large: G.large
}
  , k = ({variant: e="primary", size: t="large", ...i})=>{
    let s = `${G.button} ${fn[e]} ${yn[t]}`;
    const [a,o] = f(!1);
    i.fullWidth && (s += ` ${G.fullWidth}`);
    const l = async()=>{
        o(!0),
        await i.onClick(),
        o(!1)
    }
    ;
    return n("button", {
        class: s,
        disabled: i.disabled || a,
        onClick: ()=>{
            l().catch(console.error)
        }
        ,
        children: i.children
    })
}
  , wn = "_drowerContainer_17rzo_1"
  , bn = "_droewrHeader_17rzo_19"
  , Cn = "_drowerContent_17rzo_26"
  , Ae = {
    drowerContainer: wn,
    droewrHeader: bn,
    drowerContent: Cn
}
  , Bn = "_imageContainer_12vh8_1"
  , An = {
    imageContainer: Bn
}
  , Re = e=>n("div", {
    class: An.imageContainer,
    children: n("img", {
        src: e.img,
        alt: e.alt
    })
})
  , U = e=>{
    const t = We(null);
    S(()=>{
        t.current && (t.current.style.bottom = "0")
    }
    );
    const i = w(a=>{
        t.current && (t.current.style.bottom = "-526px"),
        setTimeout(()=>e.onClose(a), 250)
    }
    , [e])
      , s = w(async()=>{
        await e.onAction(),
        i(!0)
    }
    , [i, e.onAction]);
    return n("div", {
        ref: t,
        class: Ae.drowerContainer,
        children: [n("div", {
            class: Ae.droewrHeader,
            children: n("div", {
                onClick: ()=>i(!1),
                children: n(Re, {
                    img: hn,
                    alt: "close"
                })
            })
        }), n("div", {
            class: Ae.drowerContent,
            children: e.children
        }), e.onAction && n(k, {
            variant: e.btnVariant,
            fullWidth: !0,
            onClick: s,
            children: e.btnText
        })]
    })
}
  , kn = "_image_1yc2s_1"
  , Sn = "_price_1yc2s_13"
  , xn = "_drowerAction_1yc2s_26"
  , Ln = "_text_1yc2s_33"
  , le = {
    image: kn,
    price: Sn,
    drowerAction: xn,
    text: Ln
}
  , Tn = e=>{
    const t = m(p)
      , i = w(()=>{
        t.navService.setPageWithBack("task", {
            mission: e.mission
        })
    }
    , [t.navService, e.mission]);
    return n(U, {
        onAction: i,
        onClose: e.onClose,
        btnVariant: "secondary",
        btnText: r.button.get_it,
        children: [n("div", {
            class: le.image,
            children: n("img", {
                src: ne,
                alt: "bot_earnings"
            })
        }), n("div", {
            class: le.drowerAction,
            children: [n("div", {
                class: le.text,
                children: [n(R, {
                    children: e.mission.title
                }), n("div", {
                    children: n(E, {
                        children: r.missions.reminder.replace("%value%", b(e.mission.reward))
                    })
                })]
            }), n("div", {
                class: le.price,
                children: [n("img", {
                    src: N,
                    alt: "coin"
                }), n(z, {
                    children: b(e.mission.reward)
                })]
            })]
        })]
    })
}
  , In = "_leaveContainer_b7w50_1"
  , En = "_buttons_b7w50_19"
  , Mn = "_desc_b7w50_29"
  , ke = {
    leaveContainer: In,
    buttons: En,
    desc: Mn
}
  , Dn = ({onReload: e})=>{
    const t = m(p)
      , i = w(()=>t.localData.wait_until === null ? 0 : Math.max(0, t.localData.wait_until - y.now()), [t.localData.wait_until])
      , [s,a] = f(i());
    return X(()=>{
        const o = setInterval(()=>{
            a(i())
        }
        , 1e3);
        return ()=>clearInterval(o)
    }
    , [i]),
    n("div", {
        class: ke.leaveContainer,
        children: [n("div", {
            class: ke.desc,
            children: [n("div", {
                children: n("img", {
                    src: ne
                })
            }), n(W, {
                children: [n("p", {
                    children: r.wait.text
                }), n("p", {
                    children: r.wait.txh
                })]
            })]
        }), n("div", {
            class: ke.buttons,
            children: [n(k, {
                onClick: ()=>Telegram.WebApp.openLink("https://t.me/tapswapai"),
                children: r.wait.join_community
            }), n(k, {
                variant: "secondary",
                onClick: e,
                disabled: s > 0,
                children: n(W, {
                    children: s > 0 ? we(s) : r.wait.reload_btn
                })
            })]
        })]
    })
}
  , Pn = "_logPanel_menck_1"
  , zn = "_logContainer_menck_15"
  , Vn = "_logButtons_menck_31"
  , Wn = "_logBtn_menck_38"
  , Hn = "_logLine_menck_42"
  , Nn = "_logInfo_menck_46"
  , Rn = "_logError_menck_50"
  , jn = "_logWarn_menck_54"
  , On = "_logButton_menck_31"
  , B = {
    logPanel: Pn,
    logContainer: zn,
    logButtons: Vn,
    logBtn: Wn,
    logLine: Hn,
    logInfo: Nn,
    logError: Rn,
    logWarn: jn,
    logButton: On
};
function Se() {
    const e = m(p)
      , [t,i] = f(!1)
      , [s,a] = f(!1);
    S(()=>{
        e.log.openHandler = ()=>i(!0)
    }
    ),
    X(()=>{
        t && o.current && (o.current.scrollTop = o.current.scrollHeight)
    }
    );
    const o = We(null);
    if (!t)
        return n("button", {
            class: B.logButton,
            onClick: ()=>i(!0),
            children: "L"
        });
    const l = e.log.messages;
    return n(x, {
        children: [n("div", {
            class: B.logContainer,
            contenteditable: "true",
            spellcheck: !1,
            ref: o,
            style: {
                pointerEvents: s ? "auto" : "none"
            },
            children: [n("p", {
                style: {
                    marginBottom: 40
                }
            }), l.map(g=>n(Xn, {
                msg: g
            })), n("p", {
                style: {
                    marginBottom: 100
                }
            })]
        }), n("div", {
            class: B.logButtons,
            children: [n("button", {
                class: B.logBtn,
                onClick: ()=>a(!s),
                children: "Selection"
            }), n("button", {
                class: B.logBtn,
                onClick: ()=>{
                    var g;
                    navigator.clipboard.writeText(((g = o.current) == null ? void 0 : g.innerText) ?? "").catch(_=>console.error(_))
                }
                ,
                children: "Copy"
            }), n("button", {
                class: B.logBtn,
                onClick: ()=>i(!1),
                children: "X"
            })]
        })]
    })
}
function Xn(e) {
    let t = `${B.logLine} ${B.logInfo}`
      , i = "I";
    return e.msg.s === "W" ? (t = `${B.logLine} ${B.logWarn}`,
    i = "I") : e.msg.s === "E" && (t = `${B.logLine} ${B.logError}`,
    i = "E"),
    n(x, {
        children: [e.msg.m && n("p", {
            class: t,
            children: [i, " ", e.msg.m]
        }), e.msg.e && n(x, {
            children: [n("p", {
                class: t,
                children: e.msg.e.message
            }), n("p", {
                class: t,
                children: e.msg.e.stack
            })]
        })]
    })
}
const Gn = "_image_1yc2s_1"
  , Un = "_price_1yc2s_13"
  , Fn = "_drowerAction_1yc2s_26"
  , qn = "_text_1yc2s_33"
  , de = {
    image: Gn,
    price: Un,
    drowerAction: Fn,
    text: qn
}
  , $n = ()=>{
    const e = m(p)
      , t = ()=>{
        e.player.claimBotEarnings()
    }
    ;
    return n(U, {
        onAction: t,
        onClose: t,
        btnVariant: "secondary",
        btnText: r.button.get_it,
        children: [n("div", {
            class: de.image,
            children: n("img", {
                src: ne,
                alt: "bot_earnings"
            })
        }), n("div", {
            class: de.drowerAction,
            children: [n("div", {
                class: de.text,
                children: [n(R, {
                    children: r.tap_bot.title
                }), n("div", {
                    children: n(E, {
                        children: r.tap_bot.body
                    })
                })]
            }), n("div", {
                class: de.price,
                children: [n("img", {
                    src: N,
                    alt: "coin"
                }), n(z, {
                    children: b(e.player.climableBotEarnings)
                })]
            })]
        })]
    })
}
  , Yn = "_image_1yc2s_1"
  , Qn = "_price_1yc2s_13"
  , Zn = "_drowerAction_1yc2s_26"
  , Kn = "_text_1yc2s_33"
  , he = {
    image: Yn,
    price: Qn,
    drowerAction: Zn,
    text: Kn
}
  , Jn = e=>{
    const t = m(p)
      , i = w(async()=>{
        try {
            const s = await t.api.player_claimReward.post({
                task_id: e.notification.id
            });
            t.player.update(s.player),
            t.notification.showInfo("Done!")
        } catch (s) {
            t.log.error("player_claimReward", s),
            t.notification.showError("Error!")
        }
    }
    , [t.api.player_claimReward, t.log, t.notification, t.player, e.notification.id]);
    return n(U, {
        onAction: i,
        onClose: e.onClose,
        btnVariant: "secondary",
        btnText: r.button.get_it,
        children: [n("div", {
            class: he.image,
            children: n("img", {
                src: ne,
                alt: "bot_earnings"
            })
        }), n("div", {
            class: he.drowerAction,
            children: [n("div", {
                class: he.text,
                children: [n(R, {
                    children: r.notifications.title
                }), n("div", {
                    children: n(E, {
                        children: r.notifications.messages[e.notification.id]
                    })
                })]
            }), n("div", {
                class: he.price,
                children: [n("img", {
                    src: N,
                    alt: "coin"
                }), n(z, {
                    children: b(e.notification.reward)
                })]
            })]
        })]
    })
}
;
function ei() {
    const e = Telegram.WebApp.platform;
    return e === "android" || e === "ios"
}
function ze(e) {
    document.body.style.overflow = e ? "hidden" : "auto",
    document.body.style.marginTop = e ? "100px" : "0",
    document.body.style.height = e ? window.innerHeight + 100 + "px" : "100vh",
    window.scrollTo(0, e ? 100 : 0)
}
const ye = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAMAAADxPgR5AAAC91BMVEUAAADWm0bdpk7FjDvZqVPUnkLbpEveqU3gqk/twmv+7MDjrFHZnknepUzjrVL97sfbo0nlsFPYoUz97cbksFbepkv97cX76bb54avkrVSndijjrFLrumL87sbdpUzfp07LkD/97snmr1L57LnXlELVmEb978vepkvhq1DnslT+78v97cTZokmpdSjepkuzfC/msFbRlEPhrE/ltl3luF3WnkXvyH/VmEP978qwfC3514/ZoUjlr1LXnETLjTzfrFrVmEOnciX86sD87snGjj7215XgqU7kr1DmslWrdin75a7wxGrfp03NkED436zZoUeocyiueCutdiroslLntVfGizr21JDntl7Ahzb21Iz968L846ruyID204v74qT10Yv86bj74KGveCz00Yn43J7978ntv2bIizzRkkKZZx7xxGzsvGTPkEDEiTn97sfvwWj0yG/erVXQkUG/hTbzxm3wwmrChjjJjT798Mv31Ifnt2Ddo0zQlkXUlUTSlETNkkLKjj+7gjS3fjH86r3ltl3hsVjXmkbVl0X97cTqu2LTmUfQl0DGiTugbSOWZR2RYRvquGHhrFfbqVHMl0PHjzy+gzWdaiHjtFveqFTcplLYnEinciebaCD87MH2ynHWnUvQnEbHkkDOjz/Njj68hjejbyb757bVoEvankrLkUHCjDyvdyv86bn857L85a300ILpuV/Zpk7fp03YoU3Tm0KpdCn636DmvW/dsGDmslzjrlnTm0vNlD7Lkjy0fTGxeS6LXBf52ZD514vpvGXaokfWn0XBiDq3gTS0ey/846j74aP73pvxzIHzzXzksFrZo1Daok/Wo0zboEq5gDGsdSqmcCaVYx373Zf625TwyXvjt2XSoVPTn0jNmUbTlEPHjTnCiTa7fzOxey3sxnjuxnLpwXLhqU+teSyGWRbxynXos13hqVPVmkiNXhj03q/WplPVkkGAVRTiuXrZpWHu0qHoxo/dr27Qn0rrzJjoxpDkvYDfr2vaplyhb1YtAAAAZXRSTlMADBchBxEtImr+Hv7t4bOpg310c11HOykX/v7a0Mq/lIyKNhD+9fHw5uTf29vOpqKYmFVJJ/fq6ung2dDJsbGmnW9lW0P79/X07+3r0srJxruxjoSAeWtU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"
  , ti = "data:image/png;base64,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"
  , ni = "/assets/multitap-wNXfII5N.png"
  , it = "/assets/turbo-3TsFcQmE.png"
  , ii = {
    energy: ti,
    charge: ye,
    tap: ni,
    tap_bot: ne
}
  , si = {
    energy: ye,
    turbo: it,
    double: ye
};
function K(e) {
    return ii[e]
}
function Ve(e) {
    return si[e]
}
const ai = "_image_1yc2s_1"
  , oi = "_price_1yc2s_13"
  , ri = "_drowerAction_1yc2s_26"
  , ci = "_text_1yc2s_33"
  , ge = {
    image: ai,
    price: oi,
    drowerAction: ri,
    text: ci
}
  , li = e=>{
    const t = m(p);
    return n(U, {
        onAction: async()=>{
            try {
                await t.tapsSubmitService.submitTaps();
                const a = await t.api.player_applyBoost.post({
                    type: e.type
                });
                t.player.updateBoost(!0),
                t.player.update(a.player),
                t.notification.showInfo("Good!"),
                t.navService.setPage("taps")
            } catch (a) {
                t.log.error("player_applyBoost failed", a),
                t.notification.showError("Error!")
            }
        }
        ,
        onClose: a=>{
            e.onClose(),
            a && t.navService.back()
        }
        ,
        btnText: r.button.get_it,
        btnVariant: "secondary",
        children: [n("div", {
            class: ge.image,
            children: n("img", {
                src: Ve(e.type),
                alt: e.type
            })
        }), n("div", {
            class: ge.drowerAction,
            children: [n("div", {
                class: ge.text,
                children: [n(R, {
                    children: r.boost[e.type].title
                }), n("div", {
                    children: n(E, {
                        children: r.boost[e.type].body
                    })
                })]
            }), n("div", {
                class: ge.price,
                children: [n("img", {
                    src: N,
                    alt: "coin"
                }), n(z, {
                    children: r.boost.free
                })]
            })]
        })]
    })
}
  , be = "/assets/coin_ico-0IEzdR8j.png"
  , di = "_h1_tffsq_1"
  , hi = {
    h1: di
}
  , gi = e=>n("h1", {
    class: hi.h1,
    children: e.children
})
  , ui = "_wrapper_vzbpl_1"
  , pi = {
    wrapper: ui
}
  , st = e=>n("div", {
    class: pi.wrapper,
    children: [n("img", {
        id: "main_balance_coin",
        src: be,
        alt: "coin image"
    }), n(gi, {
        children: Ne(e.value)
    })]
});
function at() {
    const e = m(p)
      , t = te(e.player.currentBalance);
    return S(()=>{
        const s = setInterval(()=>{
            const a = e.player.currentBalance;
            if (t.value !== a)
                if (a > t.value) {
                    const o = Math.max(1, Math.floor((a - t.value) * .2));
                    t.value = Math.min(t.value + o, a)
                } else {
                    const o = Math.max(1, Math.floor((t.value - a) * .2));
                    t.value = Math.max(t.value - o, a)
                }
        }
        , 50);
        return ()=>clearInterval(s)
    }
    ),
    n(st, {
        value: t.value
    })
}
const mi = "_balanceBoxContainer_2ucgd_1"
  , _i = {
    balanceBoxContainer: mi
}
  , ot = e=>n("div", {
    class: _i.balanceBoxContainer,
    children: [n(E, {
        children: e.text
    }), e.children]
})
  , vi = "_body2_nxvid_1"
  , fi = {
    body2: vi
}
  , I = e=>n("p", {
    class: fi.body2,
    children: e.children
})
  , yi = "_boostButton_1iowv_1"
  , wi = "_info_1iowv_35"
  , Ue = {
    boostButton: yi,
    info: wi
}
  , Fe = e=>{
    const t = ()=>{
        const s = Math.max(Math.floor(864e5 - y.now() % 864e5), 0);
        return we(s)
    }
      , i = te(e.value > 0 ? `${e.value}/3` : t());
    return S(()=>{
        if (e.value === 0) {
            const s = setInterval(()=>{
                i.value = t()
            }
            , 1e3);
            return ()=>clearInterval(s)
        }
    }
    ),
    n("button", {
        class: Ue.boostButton,
        onClick: e.onClick,
        disabled: e.disabled,
        children: [n("img", {
            src: e.img,
            alt: e.title
        }), n("div", {
            class: Ue.info,
            children: [n(H, {
                children: e.title
            }), n(I, {
                children: i
            })]
        })]
    })
}
  , bi = "_bottomContent_1uv7x_1"
  , Ci = "_bottomBackdown_1uv7x_10"
  , qe = {
    bottomContent: bi,
    bottomBackdown: Ci
}
  , D = e=>n(x, {
    children: [e.compensator && n("div", {
        class: qe.bottomBackdown
    }), n("div", {
        class: qe.bottomContent,
        children: e.children
    })]
})
  , Bi = "_container_1rd9h_1"
  , Ai = {
    container: Bi
}
  , F = e=>n("div", {
    class: Ai.container,
    children: e.children
})
  , ki = "_hr_15ort_1"
  , Si = {
    hr: ki
}
  , Ce = ()=>n("div", {
    class: Si.hr
})
  , xi = "_listContainer_1519s_1"
  , Li = {
    listContainer: xi
}
  , ie = e=>n("div", {
    class: Li.listContainer,
    onScroll: t=>{
        ze(t.currentTarget.scrollTop > 0)
    }
    ,
    children: e.children
})
  , Ti = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.79502%2015.875L4.62502%2011.705L3.20502%2013.115L8.79502%2018.705L20.795%206.705L19.385%205.295L8.79502%2015.875Z'%20fill='%2328E0B9'/%3e%3c/svg%3e"
  , je = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.70498%206L8.29498%207.41L12.875%2012L8.29498%2016.59L9.70498%2018L15.705%2012L9.70498%206Z'%20fill='white'/%3e%3c/svg%3e"
  , Ii = "_listItem_1icg4_1"
  , Ei = "_reward_1icg4_21"
  , Mi = "_navigationBox_1icg4_25"
  , xe = {
    listItem: Ii,
    reward: Ei,
    navigationBox: Mi
}
  , Di = "/assets/bronze-0SrHDjVD.png"
  , Pi = "/assets/diamond-4mnGiedh.png"
  , zi = "/assets/elite-nANXQnD-.png"
  , Vi = "/assets/gold-mRqjLoGb.png"
  , Wi = "/assets/grandmaster-1xEYe6w5.png"
  , Hi = "/assets/legendary-46Gnapio.png"
  , Ni = "/assets/master-P0UrC1Yj.png"
  , Ri = "/assets/mythic-Ygh-hMOM.png"
  , ji = "/assets/platinum-QbjQJTtd.png"
  , Oi = "/assets/silver-3twj9DXt.png"
  , Xi = "/assets/wooden-Piwu07tH.png"
  , Gi = ["wood", "bronze", "silver", "gold", "platinum", "diamond", "master", "grandmaster", "elite", "legendary", "mythic"]
  , Ui = [Xi, Di, Oi, Vi, ji, Pi, Ni, Wi, zi, Hi, Ri];
function Be(e) {
    return Ui[Gi.indexOf(e.toLowerCase())]
}
const Fi = "_needAction_15xal_1"
  , qi = {
    needAction: Fi
}
  , rt = e=>n("div", {
    class: `${e.needAction ? qi.needAction : ""}`
})
  , $i = "_infoContainer_1shkw_1"
  , Yi = "_avatar_1shkw_6"
  , Qi = "_text_1shkw_12"
  , Zi = "_name_1shkw_19"
  , Ki = "_balance_1shkw_26"
  , Ji = "_priceLevel_1shkw_36"
  , es = "_hr_1shkw_42"
  , ts = "_level_1shkw_48"
  , ns = "_ligue_1shkw_52"
  , L = {
    infoContainer: $i,
    avatar: Yi,
    text: Qi,
    name: Zi,
    balance: Ki,
    priceLevel: Ji,
    hr: es,
    level: ts,
    ligue: ns
}
  , Oe = e=>n("div", {
    class: L.infoContainer,
    children: [e.img && n("div", {
        class: L.avatar,
        children: [n(rt, {
            needAction: e.needAction
        }), n("img", {
            src: e.img
        })]
    }), n("div", {
        class: L.text,
        children: [n("div", {
            class: L.name,
            children: n(H, {
                children: e.name
            })
        }), n("div", {
            class: L.priceLevel,
            children: [e.ligue !== void 0 && n("div", {
                class: L.ligue,
                children: [n("div", {
                    children: n("img", {
                        src: Be(e.ligue.name)
                    })
                }), n(I, {
                    children: e.ligue.name
                })]
            }), e.ligue !== void 0 && e.balance !== void 0 && n("div", {
                class: L.hr
            }), e.balance !== void 0 && n("div", {
                class: L.balance,
                children: [n("img", {
                    src: be,
                    alt: "coin"
                }), n(I, {
                    children: b(e.balance)
                })]
            }), e.level !== void 0 && e.balance !== void 0 && n("div", {
                class: L.hr
            }), e.level && n("div", {
                class: L.level,
                children: n(I, {
                    children: r.boost.level.replace("%value%", e.level.toString())
                })
            })]
        })]
    })]
})
  , J = e=>n("button", {
    class: `${xe.listItem}`,
    disabled: e.disabled,
    onClick: e.onClick,
    children: [n(Oe, {
        img: e.img,
        name: e.name,
        balance: e.balance,
        level: e.level,
        needAction: e.needAction
    }), n("div", {
        class: xe.navigationBox,
        children: [e.reward !== void 0 && n("div", {
            class: xe.reward,
            children: n(W, {
                children: ["+", Ne(e.reward, 0)]
            })
        }), !e.completed && !e.disabled && n("img", {
            src: je,
            alt: "right chevron"
        }), e.completed && n("img", {
            src: Ti,
            alt: "check icon"
        })]
    })]
})
  , is = "_h4_1w1my_1"
  , ss = {
    h4: is
}
  , M = e=>n("h4", {
    class: ss.h4,
    children: e.children
})
  , as = "_stack_sem72_1"
  , os = {
    stack: as
}
  , rs = e=>n("div", {
    class: os.stack,
    children: [n(M, {
        children: e.title
    }), e.children]
})
  , ct = "/assets/refferal-bs9HxsZk.png"
  , cs = "data:image/png;base64,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"
  , ls = "/assets/task-DyhGDW8C.png"
  , ds = "_button_1dzm3_1"
  , hs = "_imageContainer_1dzm3_28"
  , gs = "_active_1dzm3_34"
  , Le = {
    button: ds,
    imageContainer: hs,
    active: gs
}
  , q = e=>n("button", {
    className: `${Le.button} ${e.active && Le.active}`,
    disabled: e.disabled,
    onClick: e.onClick,
    children: [n("div", {
        class: Le.imageContainer,
        children: [n(rt, {
            needAction: e.needAction
        }), n("img", {
            src: e.icon,
            alt: "navigation button"
        })]
    }), e.text]
})
  , us = "_wrapper_1c0ec_1"
  , ps = {
    wrapper: us
}
  , ms = e=>n("div", {
    class: ps.wrapper,
    children: e.children
})
  , P = ()=>{
    const e = m(p);
    return n(ms, {
        children: [n(q, {
            icon: ct,
            text: r.button.refferal,
            onClick: ()=>e.navService.setPage("ref"),
            active: e.navService.page === "ref"
        }), n(q, {
            icon: ls,
            onClick: ()=>e.navService.setPage("task"),
            text: r.button.task,
            needAction: e.player.claims.value.length > 0 || e.account.availableMissions.length > 0,
            active: e.navService.page === "task"
        }), n(q, {
            icon: be,
            text: r.button.tap_tap,
            onClick: ()=>e.navService.setPage("taps"),
            active: e.navService.page === "taps"
        }), n(q, {
            icon: it,
            text: r.button.boost,
            onClick: ()=>e.navService.setPage("boost"),
            active: e.navService.page === "boost"
        }), n(q, {
            icon: cs,
            text: r.button.stats,
            onClick: ()=>e.navService.setPage("stat"),
            active: e.navService.page === "stat"
        })]
    })
}
  , _s = "_boostBtnRow_vghyc_1"
  , vs = "_container_vghyc_6"
  , $e = {
    boostBtnRow: _s,
    container: vs
}
  , fs = e=>{
    const t = m(p)
      , i = t.gameConf.getTapLevelByNum(t.player.tapLevel + 1)
      , s = t.gameConf.getChargeLevelByNum(t.player.chargeLevel + 1)
      , a = t.gameConf.getEnergyLevelByNum(t.player.energyLevel + 1)
      , o = t.player.getBoostByType("turbo")
      , l = t.player.getBoostByType("energy")
      , g = t.player.activeBoosts;
    return n(F, {
        children: [n(ot, {
            text: r.account.your_balance,
            children: n(at, {})
        }), n(Ce, {}), n(rs, {
            title: r.boost.free_boost,
            children: n("div", {
                class: $e.boostBtnRow,
                children: [n(Fe, {
                    img: Ve("turbo"),
                    title: r.boost.turbo.title,
                    value: (o == null ? void 0 : o.cnt) || 0,
                    disabled: o && o.cnt === 0 || g.length > 0,
                    onClick: ()=>e.onOpenBoostPopup("turbo")
                }), n(Fe, {
                    img: Ve("energy"),
                    title: r.boost.energy.title,
                    value: (l == null ? void 0 : l.cnt) || 0,
                    disabled: l && l.cnt === 0 || g.length > 0,
                    onClick: ()=>e.onOpenBoostPopup("energy")
                })]
            })
        }), n("div", {
            class: $e.container,
            children: [n(M, {
                children: r.boost.boost
            }), n(ie, {
                children: [n(J, {
                    name: r.upgrades.tap.title,
                    img: K("tap"),
                    balance: i == null ? void 0 : i.price,
                    level: t.player.tapLevel,
                    disabled: i === void 0,
                    onClick: ()=>e.onOpenPopUp("tap", i.price, t.player.tapLevel + 1)
                }), n(J, {
                    name: r.upgrades.energy.title,
                    img: K("energy"),
                    balance: a == null ? void 0 : a.price,
                    level: t.player.energyLevel,
                    disabled: a === void 0,
                    onClick: ()=>e.onOpenPopUp("energy", a.price, t.player.energyLevel + 1)
                }), n(J, {
                    name: r.upgrades.charge.title,
                    img: K("charge"),
                    balance: s == null ? void 0 : s.price,
                    level: t.player.chargeLevel,
                    disabled: s === void 0,
                    onClick: ()=>e.onOpenPopUp("charge", s.price, t.player.chargeLevel + 1)
                }), n(J, {
                    name: r.upgrades.tap_bot.title,
                    img: K("tap_bot"),
                    balance: t.gameConf.tapBot.price,
                    disabled: t.player.haveTapBot,
                    onClick: ()=>e.onOpenPopUp("tap_bot", t.gameConf.tapBot.price, 0)
                })]
            })]
        }), n(D, {
            compensator: !0,
            children: n(P, {})
        })]
    })
}
  , ys = "_image_19lh0_1"
  , ws = "_price_19lh0_13"
  , bs = "_drowerAction_19lh0_23"
  , Cs = "_text_19lh0_30"
  , Bs = "_desc_19lh0_40"
  , $ = {
    image: ys,
    price: ws,
    drowerAction: bs,
    text: Cs,
    desc: Bs
}
  , As = e=>{
    const t = m(p)
      , i = async()=>{
        try {
            await t.tapsSubmitService.submitTaps();
            const s = await t.api.player_upgrade.post({
                type: e.type
            });
            t.player.update(s.player),
            t.notification.showInfo("Good!")
        } catch (s) {
            t.log.error("player_upgrade failed", s),
            t.notification.showError("Error!")
        }
    }
    ;
    return n(U, {
        onAction: t.player.currentBalance < e.price ? void 0 : i,
        onClose: e.onClose,
        btnVariant: "secondary",
        btnText: r.button.get_it,
        children: [n("div", {
            class: $.image,
            children: n("img", {
                src: K(e.type),
                alt: e.type
            })
        }), n("div", {
            class: $.drowerAction,
            children: [n("div", {
                class: $.text,
                children: [n(R, {
                    children: r.upgrades[e.type].title
                }), n("div", {
                    class: $.desc,
                    children: [n(E, {
                        children: r.upgrades[e.type].body1
                    }), n(E, {
                        children: r.upgrades[e.type].body2
                    })]
                })]
            }), n("div", {
                class: $.price,
                children: [n("img", {
                    src: N,
                    alt: "coin"
                }), n(z, {
                    children: b(e.price)
                }), e.lvl > 0 && n(x, {
                    children: [n(I, {
                        children: "|"
                    }), n(I, {
                        children: r.boost.level.replace("%value%", e.lvl.toString())
                    })]
                })]
            }), t.player.shares < e.price && n("div", {
                children: r.boost.insuffisient_funds
            })]
        })]
    })
}
;
function ks() {
    const [e,t] = f(null)
      , [i,s] = f(null)
      , a = m(p);
    return S(()=>{
        a.tapsSubmitService.submitTaps().catch(o=>a.log.error("submitTaps failed", o))
    }
    ),
    n(A, {
        children: [n(fs, {
            onOpenBoostPopup: o=>{
                !e && !i && s(o)
            }
            ,
            onOpenPopUp: (o,l,g)=>{
                !e && !i && t({
                    type: o,
                    price: l,
                    lvl: g
                })
            }
        }), e && n(As, {
            type: e.type,
            price: e.price,
            lvl: e.lvl,
            onClose: ()=>t(null)
        }), i && n(li, {
            type: i,
            onClose: ()=>s(null)
        })]
    })
}
const Ss = "_backBtn_gxroi_1"
  , xs = {
    backBtn: Ss
}
  , lt = ()=>{
    const e = m(p);
    return e.env === "prod" ? n(x, {}) : n("button", {
        onClick: ()=>e.navService.back(),
        class: xs.backBtn,
        children: "back"
    })
}
  , Ls = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.705%207.41L14.295%206L8.29498%2012L14.295%2018L15.705%2016.59L11.125%2012L15.705%207.41Z'%20fill='white'/%3e%3c/svg%3e"
  , Ts = "_content_10kh8_1"
  , Is = "_description_10kh8_10"
  , Ye = {
    content: Ts,
    description: Is
}
  , dt = e=>n("div", {
    class: Ye.content,
    children: [n(z, {
        children: e.title
    }), n("div", {
        class: Ye.description,
        children: e.desc.split(`
`).map(t=>{
            const i = t.indexOf("https://phantom.app/");
            return i === -1 ? n("p", {
                children: t
            }) : n(x, {
                children: n("p", {
                    children: [t.slice(0, i), n("a", {
                        href: "https://phantom.app/",
                        target: "_blank",
                        children: "https://phantom.app/"
                    }), t.slice(i + 20)]
                })
            })
        }
        )
    })]
})
  , Es = "_ligueContent_8l9ha_1"
  , Ms = "_iamgeSlider_8l9ha_9"
  , Ds = "_ligueImg_8l9ha_30"
  , Te = {
    ligueContent: Es,
    iamgeSlider: Ms,
    ligueImg: Ds
}
  , Ps = "_wrapper_pywek_1"
  , zs = "_progressBackground_pywek_6"
  , Vs = "_progressLine_pywek_16"
  , Ie = {
    wrapper: Ps,
    progressBackground: zs,
    progressLine: Vs
}
  , Xe = e=>n("div", {
    class: Ie.wrapper,
    children: n("div", {
        class: Ie.progressBackground,
        children: n("div", {
            class: Ie.progressLine,
            style: {
                width: `${e.currentEnergy}%`
            }
        })
    })
})
  , Ws = "_wrapper_1prfp_1"
  , Hs = "_text_1prfp_9"
  , Qe = {
    wrapper: Ws,
    text: Hs
}
  , Ns = e=>n("div", {
    class: Qe.wrapper,
    children: [n("div", {
        class: Qe.text,
        children: n(M, {
            children: [b(e.currentEnergy), " / ", b(e.energiLimit)]
        })
    }), n(Xe, {
        currentEnergy: e.currentEnergy / e.energiLimit * 100
    })]
})
  , Rs = ()=>{
    const e = m(p)
      , [t,i] = f(e.player.ligue)
      , s = e.gameConf.getLigue(t)
      , a = e.gameConf.getLigueByNum(t - 1)
      , o = e.gameConf.getLigueByNum(t + 1);
    return n(F, {
        children: n("div", {
            class: Te.ligueContent,
            children: [n(dt, {
                title: s.title,
                desc: r.common.league_desc
            }), n("div", {
                class: Te.iamgeSlider,
                children: [n("button", {
                    children: a && n("img", {
                        onClick: ()=>i(t - 1),
                        src: Ls,
                        alt: "chevron left"
                    })
                }), n("div", {
                    class: Te.ligueImg,
                    children: n("img", {
                        src: Be(s.name),
                        alt: s.name
                    })
                }), n("button", {
                    children: o && n("img", {
                        onClick: ()=>i(t + 1),
                        src: je,
                        alt: "chevron right"
                    })
                })]
            }), t === e.player.ligue && o ? n(Ns, {
                currentEnergy: e.player.totalEarned,
                energiLimit: o.score
            }) : n(M, {
                children: [r.common.from, " ", b(s.score)]
            })]
        })
    })
}
;
function js() {
    return n(A, {
        children: [n(lt, {}), n(Rs, {}), n(D, {
            compensator: !0,
            children: n(P, {})
        })]
    })
}
const Os = "_container_alckf_1"
  , Xs = "_header_alckf_6"
  , Gs = "_link_alckf_11"
  , Ee = {
    container: Os,
    header: Xs,
    link: Gs
}
  , Us = ()=>{
    const e = m(p)
      , [t,i] = f(!1)
      , s = w(async()=>{
        await window.navigator.clipboard.writeText(e.inviteLink + " 🎁 +2.5k Shares as a first-time gift"),
        i(!0)
    }
    , [e.inviteLink]);
    return n(x, {
        children: n("div", {
            class: Ee.container,
            children: [n("div", {
                class: Ee.header,
                children: [n(M, {
                    children: r.ref.invite_link
                }), n(k, {
                    variant: "secondary",
                    onClick: ()=>s().catch(console.error),
                    size: "small",
                    children: t ? r.button.invite_copied : r.button.invite_copy
                })]
            }), n("div", {
                class: Ee.link,
                children: e.inviteLink
            })]
        })
    })
}
  , Fs = "_refBalanceContainer_rqgos_1"
  , qs = {
    refBalanceContainer: Fs
}
  , $s = e=>n("div", {
    class: qs.refBalanceContainer,
    children: [n(R, {
        children: r.ref.value_ref.replace("$value$", e.value.toString())
    }), n(W, {
        children: ["+", b(e.valueDiff)]
    })]
})
  , Ys = "_listItem_qewdd_1"
  , Qs = "_reward_qewdd_19"
  , Zs = "_listItemBody_qewdd_23"
  , Ks = "_listItemProgress_qewdd_28"
  , Js = "_navigationBox_qewdd_33"
  , Y = {
    listItem: Ys,
    reward: Qs,
    listItemBody: Zs,
    listItemProgress: Ks,
    navigationBox: Js
}
  , ea = e=>n("button", {
    class: `${Y.listItem}`,
    onClick: e.onClick,
    children: [n("div", {
        class: Y.listItemBody,
        children: [n(Oe, {
            img: e.img,
            name: e.name,
            balance: e.balance,
            ligue: e.ligue
        }), n("div", {
            class: Y.navigationBox,
            children: [e.reward !== void 0 && n("div", {
                class: Y.reward,
                children: n(W, {
                    children: ["+", Ne(e.reward, 0)]
                })
            }), !e.disabled && n("img", {
                src: je,
                alt: "right chevron"
            })]
        })]
    }), n("div", {
        class: Y.listItemProgress,
        children: n(Xe, {
            currentEnergy: e.ligueProgress
        })
    })]
})
  , ta = e=>{
    const i = m(p).gameConf.ligues;
    return n(ie, {
        children: e.referrals.map(s=>{
            const a = i.findIndex(_=>_.score > s.earned)
              , o = a >= 0 ? i[a] : null
              , l = a >= 0 ? i[a - 1] : kt.getLast(i)
              , g = o ? s.earned * 100 / o.score : 100;
            return n(ea, {
                name: s.full_name || s.name,
                reward: s.rewards,
                balance: s.earned,
                disabled: !s.name,
                ligue: l,
                ligueProgress: g,
                onClick: ()=>{
                    s.name && e.startConversation(s.name)
                }
            }, s.id)
        }
        )
    })
}
  , na = "_info_13mj9_1"
  , ia = "_empty_13mj9_7"
  , sa = "_titleBtn_13mj9_15"
  , Ze = {
    info: na,
    empty: ia,
    titleBtn: sa
}
  , aa = ()=>{
    const e = m(p)
      , [t,i] = f();
    X(()=>{
        let a = !1;
        const o = ()=>{
            !a && (t != null && t.has_more) && document.body.scrollTop > document.body.scrollHeight - window.innerHeight - 100 && (document.body.addEventListener("scroll", o),
            a = !0,
            e.api.player_getRefs.post({
                skip: t.refs.length
            }).then(l=>{
                i({
                    refs: t.refs.concat(l.refs),
                    has_more: l.has_more
                }),
                a = !1
            }
            ).catch(l=>{
                e.log.error("player_getRefs failed", l),
                a = !1
            }
            ))
        }
        ;
        return document.body.addEventListener("scroll", o),
        ()=>document.body.removeEventListener("scroll", o)
    }
    , [e.api.player_getRefs, e.log, t]),
    S(()=>{
        e.api.player_getRefs.post({}).then(a=>{
            i(a)
        }
        ).catch(a=>{
            e.log.error("player_getRefs failed", a)
        }
        )
    }
    );
    const s = a=>{
        Telegram.WebApp.openTelegramLink(`https://t.me/${a}`)
    }
    ;
    return t === void 0 ? n(A, {
        page: "loading",
        children: [n(He, {}), n(D, {
            compensator: !0,
            children: n(P, {})
        })]
    }) : t ? n(F, {
        children: [n("div", {
            class: Ze.info,
            children: [n($s, {
                value: e.player.stat.ref_cnt,
                valueDiff: e.player.stat.ref_in
            }), n(Us, {})]
        }), n(Ce, {}), n(M, {
            children: r.ref.ref_list
        }), t.refs.length === 0 ? n("div", {
            class: Ze.empty,
            children: n(E, {
                children: r.ref.empty
            })
        }) : n(ta, {
            referrals: t.refs,
            startConversation: s
        }), n(D, {
            compensator: !0,
            children: n(P, {})
        })]
    }) : n(A, {
        page: "loading",
        children: "Something went wrong :("
    })
}
;
function oa() {
    return n(A, {
        children: n(aa, {})
    })
}
const ra = "_infoContainer_1pp8i_1"
  , ca = {
    infoContainer: ra
}
  , ue = e=>n("div", {
    class: ca.infoContainer,
    children: [n(H, {
        children: e.text
    }), n(z, {
        children: b(e.value)
    })]
})
  , la = "_infoList_ji7jy_1"
  , da = {
    infoList: la
}
  , ha = ({stat: e})=>n(F, {
    children: [n(ot, {
        text: r.stat.total_b,
        children: n(st, {
            value: Math.floor(e.players.earned + e.players.reward - e.players.spent)
        })
    }), n(Ce, {}), n("div", {
        class: da.infoList,
        children: [n(ue, {
            text: r.stat.total_t,
            value: e.players.taps
        }), n(ue, {
            text: r.stat.total_p,
            value: e.accounts.total
        }), n(ue, {
            text: r.stat.daily_p,
            value: e.accounts.active
        }), n(ue, {
            text: r.stat.online_p,
            value: e.accounts.online
        })]
    })]
});
function ga() {
    const e = m(p)
      , [t,i] = f();
    return S(()=>{
        e.api.root_getStat.get({}).then(s=>{
            console.log("result", s),
            i(s)
        }
        ).catch(s=>{
            e.log.error("root_getStat failed", s)
        }
        )
    }
    ),
    t ? n(A, {
        children: [n(ha, {
            stat: t
        }), n(D, {
            compensator: !0,
            children: n(P, {})
        })]
    }) : n(A, {
        page: "loading",
        children: [n(He, {}), n(D, {
            compensator: !0,
            children: n(P, {})
        })]
    })
}
const ua = "_tapContainer_igohf_1"
  , pa = "_boostCoinBg_igohf_9"
  , ma = "_tapContent_igohf_31"
  , _a = "_text_igohf_44"
  , va = "_active_igohf_56"
  , O = {
    tapContainer: ua,
    boostCoinBg: pa,
    tapContent: ma,
    text: _a,
    active: va
};
class fa {
    constructor(t, i, s) {
        c(this, "_readyElements", []);
        c(this, "_busyElements", []);
        c(this, "_animationDurationMs", 1500);
        c(this, "_animationDistancePx", 200);
        c(this, "_perspectiveObject");
        c(this, "_mainCoinElement");
        c(this, "_animationLayout");
        c(this, "_drawer");
        c(this, "_interval");
        c(this, "_active", !0);
        c(this, "run", ()=>{
            const t = y.now();
            for (let s = 0; s < this._busyElements.length; s++) {
                const a = this._busyElements[s];
                if (!a.activated) {
                    a.el.style.left = a.endPosition.x + "px",
                    a.el.style.top = a.endPosition.y + "px",
                    a.el.style.opacity = a.endAlpha.toString(),
                    a.activated = !0;
                    continue
                }
                a.realeaseTime <= t && (this._busyElements.splice(s, 1),
                a.el.parentNode.removeChild(a.el),
                this._readyElements.push(a.el))
            }
            this.player.getActiveBostByType("turbo") ? this._drawer.active || this._drawer.start() : this._drawer.active && this._drawer.stop()
        }
        );
        c(this, "onDown", t=>{
            try {
                if (!this.player.canTap)
                    return;
                const i = t.offsetX
                  , s = t.offsetY
                  , a = this.container.getBoundingClientRect().width / 2;
                if (Math.sqrt(Math.pow(t.offsetX - a, 2) + Math.pow(s - a, 2)) < a) {
                    this.setPerspective(i, s);
                    const l = this.getAnimatedElement(i, s, this._animationDurationMs);
                    this.appendAminamedElement(this.container, l, y.addMillis(y.now(), this._animationDurationMs), {
                        x: i,
                        y: s - this._animationDistancePx
                    }, 0),
                    this._drawer.active && this._drawer.pickOne(),
                    this.player.applyTap(),
                    Telegram.WebApp.HapticFeedback.impactOccurred("light"),
                    Telegram.WebApp.isClosingConfirmationEnabled || Telegram.WebApp.enableClosingConfirmation()
                }
            } catch (i) {
                this.log.error(i)
            }
        }
        );
        c(this, "onPointerUp", ()=>{
            this._perspectiveObject.style.transform = "none"
        }
        );
        this.player = t,
        this.container = i,
        this.log = s,
        this._perspectiveObject = this.container.getElementsByTagName("img")[0],
        this._mainCoinElement = document.getElementById("main_balance_coin"),
        this._animationLayout = document.getElementById("animation_layer"),
        this._drawer = new ya(this._animationLayout.getElementsByTagName("canvas")[0],this._mainCoinElement,this._perspectiveObject),
        window.addEventListener("touchend", this.onPointerUp),
        window.addEventListener("pointerup", this.onPointerUp),
        i.addEventListener("pointerdown", this.onDown),
        this._interval = setInterval(()=>{
            this.run()
        }
        , 75)
    }
    setPerspective(t, i) {
        const a = this.container.getBoundingClientRect()
          , o = -(i - a.height / 2) / 20
          , l = (t - a.width / 2) / 20;
        this._perspectiveObject.style.transform = `perspective(${a.width}px)    rotateX(` + o + "deg)    rotateY(" + l + "deg) "
    }
    getAnimatedElement(t, i, s) {
        const a = this._readyElements.pop() ?? this.createElement();
        return a.style.transitionDuration = s + "ms",
        a.textContent = "+" + this.player.tapRate.toString(),
        a.style.left = t + "px",
        a.style.top = i + "px",
        a.style.opacity = "1",
        a
    }
    appendAminamedElement(t, i, s, a, o) {
        this._busyElements.push({
            activated: !1,
            realeaseTime: s,
            endPosition: a,
            el: i,
            endAlpha: o
        }),
        t.appendChild(i)
    }
    createElement() {
        const t = document.createElement("h6");
        return t.className = O.text,
        t
    }
    dispose() {
        clearInterval(this._interval),
        window.removeEventListener("touchend", this.onPointerUp),
        window.removeEventListener("pointerup", this.onPointerUp),
        this.container.removeEventListener("pointerdown", this.onDown)
    }
}
class ya {
    constructor(t, i, s) {
        c(this, "_canvas");
        c(this, "_ctx");
        c(this, "_img");
        c(this, "_centerImage");
        c(this, "_coins", []);
        c(this, "_pickedCoins", []);
        c(this, "_distance", 100);
        c(this, "_speed", 2);
        c(this, "_coinAmountMin", 5);
        c(this, "_coinsAmountMax", 25);
        c(this, "_backWaySpeedIncrease", 1.2);
        c(this, "_active", !1);
        c(this, "radius", 0);
        c(this, "imgWidth");
        c(this, "imgHeight");
        c(this, "_coinSizeChanged", 0);
        c(this, "loop", ()=>{
            (this._coinSizeChanged + 25 < y.now() || this._pickedCoins.length === 0) && this._img.classList.remove(O.active),
            this.createCoins(),
            this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height),
            !(this._coins.length === 0 && this._pickedCoins.length === 0) && (this.drawCoins(),
            this.radius += this._speed,
            this.cleanCoins(this._coins),
            this.cleanCoins(this._pickedCoins),
            requestAnimationFrame(this.loop))
        }
        );
        c(this, "angle", (t,i,s,a)=>{
            const o = a - i
              , l = s - t;
            return Math.atan2(o, l)
        }
        );
        this._canvas = t,
        t.style.width = window.innerWidth + "px",
        t.style.height = window.innerHeight + "px",
        t.width = window.innerWidth,
        t.height = window.innerHeight,
        this._img = i,
        this._centerImage = s,
        this._ctx = t.getContext("2d"),
        this.imgWidth = this._img.width / 2,
        this.imgHeight = this._img.height / 2
    }
    start() {
        this._active || (this._active = !0,
        this.loop())
    }
    stop() {
        this._active && (this._active = !1)
    }
    cleanCoins(t) {
        t.forEach((i,s)=>{
            i.draw || t.splice(s, 1)
        }
        )
    }
    createCoins() {
        if (!this._active || this._coins.length > 0 && this.radius < this._distance)
            return;
        this.radius = 0;
        const t = this._centerImage.getBoundingClientRect()
          , i = 0
          , s = Math.floor(this._coinAmountMin + Math.random() * (this._coinsAmountMax - this._coinAmountMin));
        for (let a = 0; a < s; a++) {
            const o = Math.random()
              , l = a * (2 * Math.PI / s);
            this._coins.push({
                ancorX: t.x + t.width / 2,
                ancorY: t.y + t.height / 2,
                x: 0,
                y: 0,
                radius: i,
                speed: 1 + this._speed * o,
                draw: !0,
                alpha: o,
                angle: l > 0 ? l * .95 + Math.random() * l * .1 : -.2 + Math.random() * .4
            })
        }
        this._coins.sort((a,o)=>a.alpha - o.alpha)
    }
    drawCoins() {
        const t = this._img.getBoundingClientRect();
        for (const i of this._pickedCoins) {
            if (!i.draw)
                continue;
            i.radius += i.speed;
            const s = this.angle(i.ancorX, i.ancorY, t.x + t.width / 2 - this.imgWidth / 2, t.y + t.height / 2 - this.imgHeight / 2);
            this.moveAndDrawCoin(i, s, t) || (this._img.classList.add(O.active),
            this._coinSizeChanged = y.now())
        }
        for (const i of this._coins)
            i.draw && (this._active ? i.radius += i.speed : (i.speed *= this._backWaySpeedIncrease,
            i.radius -= i.speed),
            this.moveAndDrawCoin(i, i.angle))
    }
    moveAndDrawCoin(t, i, s) {
        return t.x = t.ancorX - this.imgWidth / 2 + t.radius * Math.cos(i),
        t.y = t.ancorY - this.imgHeight / 2 + t.radius * Math.sin(i),
        this.isCoinNeedLeaveScene(t, s) ? (t.draw = !1,
        !1) : (this._ctx.globalAlpha = t.alpha,
        this._ctx.drawImage(this._img, t.x, t.y, this.imgWidth, this.imgHeight),
        !0)
    }
    isCoinNeedLeaveScene(t, i) {
        return i ? Math.abs(i.x + i.width / 2 - t.x - this.imgWidth / 2) < i.width / 2 && Math.abs(i.y + i.height / 2 - t.y - this.imgHeight / 2) < i.height / 2 : !this._active && t.radius < 0 ? !0 : t.x < -this.imgWidth || t.y < -this.imgHeight || t.x > this._canvas.width + this.imgWidth || t.y > this._canvas.height + this.imgHeight
    }
    pickOne() {
        if (this._coins.length === 0)
            return;
        const t = Math.floor(Math.random() * this._coins.length)
          , i = this._coins[t];
        i.draw = !1,
        this._pickedCoins.push({
            ...i,
            radius: 0,
            alpha: 1,
            draw: !0,
            speed: Math.ceil(this._speed * 2 + Math.random() * this._speed * 4),
            ancorX: i.x,
            ancorY: i.y
        })
    }
    get active() {
        return this._active
    }
}
function wa() {
    const e = m(p)
      , t = We(null);
    return S(()=>{
        if (t.current) {
            const i = new fa(e.player,t.current,e.log);
            return ()=>i.dispose()
        }
    }
    ),
    n("div", {
        class: `${O.tapContainer} ${e.player.getActiveBostByType("turbo") && O.boostCoinBg}`,
        children: n("div", {
            ref: t,
            id: "ex1-layer",
            class: O.tapContent,
            children: n("img", {
                draggable: !1,
                src: N
            })
        })
    })
}
const ba = ()=>n("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: n("path", {
        d: "M9.70498 6L8.29498 7.41L12.875 12L8.29498 16.59L9.70498 18L15.705 12L9.70498 6Z",
        fill: "white"
    })
})
  , Ca = "_ligueBtn_8b3n6_1"
  , Ba = {
    ligueBtn: Ca
}
  , Aa = ()=>{
    const e = m(p)
      , t = e.player.currentLigue;
    return n("div", {
        class: Ba.ligueBtn,
        onClick: ()=>e.navService.setPageWithBack("ligue"),
        children: [n(Re, {
            img: Be(t.name),
            alt: t.name
        }), n(M, {
            children: t.name
        }), n(ba, {})]
    })
}
  , ka = "_balanceInfo_172y5_1"
  , Sa = {
    balanceInfo: ka
}
  , ht = ()=>n("div", {
    class: Sa.balanceInfo,
    children: [n(at, {}), n(Aa, {})]
})
  , xa = "_container_sn75j_1"
  , La = {
    container: xa
}
  , Ta = ()=>n("div", {
    class: La.container,
    children: [n(ht, {}), n(wa, {})]
})
  , Ia = "_wrapper_iqvdz_1"
  , Ea = {
    wrapper: Ia
}
  , Ma = "_wrapper_16ny2_1"
  , Da = "_progressBackground_16ny2_6"
  , Pa = "_progressLine_16ny2_16"
  , Me = {
    wrapper: Ma,
    progressBackground: Da,
    progressLine: Pa
}
  , za = e=>n("div", {
    class: Me.wrapper,
    children: n("div", {
        class: Me.progressBackground,
        children: n("div", {
            class: Me.progressLine,
            style: {
                width: `${e.currentEnergy}%`
            }
        })
    })
})
  , Va = "_wrapper_tzq8x_1"
  , Wa = "_text_tzq8x_8"
  , Ha = "_value_tzq8x_13"
  , De = {
    wrapper: Va,
    text: Wa,
    value: Ha
}
  , Na = e=>n("div", {
    class: De.wrapper,
    children: [n("div", {
        class: De.text,
        children: [n(Re, {
            img: ye,
            alt: "progress value"
        }), n("div", {
            class: De.value,
            children: [n(M, {
                children: e.currentEnergy
            }), n(W, {
                children: ["/ ", e.energiLimit]
            })]
        })]
    }), n(za, {
        currentEnergy: e.currentEnergy / e.energiLimit * 100
    })]
});
function Ra() {
    const e = m(p)
      , t = te(e.player.currentEnergy);
    return wt(()=>{
        t.value = e.player.currentEnergy
    }
    ),
    S(()=>{
        const i = setInterval(()=>{
            t.value = e.player.currentEnergy
        }
        , 500);
        return ()=>clearInterval(i)
    }
    ),
    n("div", {
        class: Ea.wrapper,
        children: n(Na, {
            currentEnergy: t.value,
            energiLimit: e.player.currentEnergyLevel.limit
        })
    })
}
const ja = "_wrapper_1ab1s_1"
  , Oa = {
    wrapper: ja
}
  , Xa = ()=>n("div", {
    class: Oa.wrapper,
    children: [n(Ra, {}), n(P, {})]
});
function Ga() {
    return S(()=>{
        const e = t=>{
            t.preventDefault()
        }
        ;
        return window.addEventListener("contextmenu", e),
        window.addEventListener("touchmove", e, {
            passive: !1
        }),
        ze(!0),
        ()=>{
            ze(!1),
            window.removeEventListener("touchmove", e),
            window.removeEventListener("contextmenu", e)
        }
    }
    ),
    n(A, {
        page: "main",
        children: [n(F, {
            children: [n("div", {
                id: "animation_layer",
                className: ee.animationLayer,
                children: n("canvas", {})
            }), n(Ta, {})]
        }), n(D, {
            children: n(Xa, {})
        })]
    })
}
const Ua = "_tabsContainer_ly1k8_1"
  , Fa = "_tabs_ly1k8_1"
  , qa = "_tab_ly1k8_1"
  , $a = "_active_ly1k8_30"
  , Ya = "_taskAlert_ly1k8_34"
  , Q = {
    tabsContainer: Ua,
    tabs: Fa,
    tab: qa,
    active: $a,
    taskAlert: Ya
}
  , Qa = e=>n("div", {
    class: Q.tabsContainer,
    children: [n("div", {
        class: Q.tabs,
        children: e.tabs.map((t,i)=>n("button", {
            onClick: ()=>e.onTabChange(i),
            class: `${Q.tab} ${e.activeTab === i && Q.active} ${t.taskAlert && Q.taskAlert}`,
            children: t.title
        }, i))
    }), e.tabs.map((t,i)=>e.activeTab === i && t.tab)]
})
  , Za = "/assets/tasklist-QmnCOg_x.png"
  , Ka = "/assets/congratulations-xzur9oKX.png"
  , Ja = "_image_19lh0_1"
  , eo = "_price_19lh0_13"
  , to = "_drowerAction_19lh0_23"
  , no = "_text_19lh0_30"
  , io = "_desc_19lh0_40"
  , Z = {
    image: Ja,
    price: eo,
    drowerAction: to,
    text: no,
    desc: io
}
  , so = e=>{
    const t = m(p)
      , i = t.player.claims.value.find(a=>a === e.missionConf.id)
      , s = w(async()=>{
        try {
            if (!i)
                return;
            const a = await t.api.player_claimReward.post({
                task_id: i
            });
            t.player.update(a.player),
            t.notification.showInfo("Done!")
        } catch (a) {
            t.log.error("player_claimReward", a),
            t.notification.showError("Error!")
        }
    }
    , [t.api.player_claimReward, t.log, t.notification, t.player, i]);
    return n(U, {
        onAction: s,
        onClose: ()=>s,
        btnVariant: "primary",
        btnText: r.button.claim,
        children: [n("div", {
            class: Z.image,
            children: n("img", {
                src: Ka,
                alt: "congratulations"
            })
        }), n("div", {
            class: Z.drowerAction,
            children: [n("div", {
                class: Z.text,
                children: [n(R, {
                    children: r.missions.conget
                }), n("div", {
                    class: Z.desc,
                    children: n(E, {
                        children: r.missions.congret_desc
                    })
                })]
            }), n("div", {
                class: Z.price,
                children: [n("img", {
                    src: N,
                    alt: "coin"
                }), n(z, {
                    children: b(e.missionConf.reward)
                })]
            })]
        })]
    })
}
;
function Ke(e) {
    if (e.link)
        return e.link;
    if (!e.name)
        throw new Error("Social name is not defined");
    switch (e.type) {
    case "tg":
        return `https://t.me/${e.name.replace("@", "")}`;
    case "x":
        return `https://twitter.com/${e.name}`;
    default:
        return e.name
    }
}
const ao = "_item_10hts_1"
  , oo = "_link_10hts_10"
  , ro = "_disabled_10hts_22"
  , co = "_done_10hts_27"
  , pe = {
    item: ao,
    link: oo,
    disabled: ro,
    done: co
}
  , lo = ({item: e, confItem: t, disabled: i, onSubmit: s, claim: a, instrunctions: o})=>{
    const l = !e || !e.verified
      , [g,_] = f(!1)
      , d = w(()=>e ? Math.max(e.verified_at !== void 0 ? e.verified_at + 3e4 - y.now() : 0, 0) : 0, [e])
      , [h,u] = f(e !== void 0 && (e.verified || e.verified_at !== void 0));
    X(()=>{
        u(h || e !== void 0 && (e.verified || e.verified_at !== void 0))
    }
    , [h, e]);
    const v = te(d());
    X(()=>{
        const C = setInterval(()=>{
            v.value = d(),
            v.value > 0 && _(!1)
        }
        , 1e3);
        return ()=>clearInterval(C)
    }
    , [d, e, v]);
    const se = async()=>{
        _(!0),
        await s()
    }
      , ae = ()=>{
        setTimeout(()=>u(!0), 1e3)
    }
    ;
    return n("div", {
        className: `${pe.item} ${i && pe.disabled}`,
        children: [n("a", {
            onClick: ae,
            href: Ke(t),
            target: "_blank",
            class: pe.link,
            children: [n(H, {
                children: o || r.missions.instructions[t.type]
            }), !a && l && v.value > 0 && n(I, {
                children: r.missions.erroe_message
            })]
        }), e && !h && n("a", {
            onClick: ae,
            href: Ke(t),
            target: "_blank",
            children: n(k, {
                onClick: async()=>{}
                ,
                size: "small",
                variant: "secondary",
                children: r.button.go
            })
        }), e && h && n(x, {
            children: (i || l) && !a ? n(k, {
                onClick: se,
                size: "small",
                variant: "secondary",
                disabled: l && v.value > 0 || i || g,
                children: v.value > 0 ? we(v.value) : r.button.check
            }) : n("div", {
                class: pe.done,
                children: r.missions.done
            })
        })]
    })
}
  , ho = "_container_1qbto_1"
  , go = "_content_1qbto_13"
  , uo = "_list_1qbto_22"
  , po = "_completed_1qbto_28"
  , Pe = {
    container: ho,
    content: go,
    list: uo,
    completed: po
}
  , mo = "_item_w3cz8_1"
  , _o = "_link_w3cz8_10"
  , vo = "_mainText_w3cz8_21"
  , fo = "_text_w3cz8_28"
  , yo = "_disabled_w3cz8_32"
  , wo = "_done_w3cz8_37"
  , j = {
    item: mo,
    link: _o,
    mainText: vo,
    text: fo,
    disabled: yo,
    done: wo
}
  , bo = ({item: e, disabled: t, onSubmit: i, claim: s})=>{
    const a = m(p)
      , o = !e || !e.verified
      , [l,g] = f(!1)
      , _ = w(()=>!e || e.verified ? 0 : Math.max(e.verified_at !== void 0 ? e.verified_at + 3e4 - y.now() : 0, 0), [e])
      , d = te(_());
    X(()=>{
        const u = setInterval(()=>{
            d.value = _(),
            d.value > 0 && g(!1)
        }
        , 1e3);
        return ()=>clearInterval(u)
    }
    , [_, e, d]);
    const h = async()=>{
        g(!0),
        await i()
    }
    ;
    return n("div", {
        className: `${j.item} ${t && j.disabled}`,
        children: n("div", {
            className: j.link,
            children: [n("div", {
                className: j.mainText,
                children: [n("h5", {
                    className: j.text,
                    children: r.missions.solana_wallet
                }), n(k, {
                    variant: "secondary",
                    size: "small",
                    onClick: async()=>{
                        const u = await a.api.wallet_getLoginToken.post({});
                        Telegram.WebApp.openLink(`/wallet/?token=${u.token}&userId=${a.player.id}`)
                    }
                    ,
                    children: (t || o) && !s ? r.button.go : r.button.open
                }), e && n(x, {
                    children: (t || o) && !s ? n(k, {
                        onClick: h,
                        variant: "secondary",
                        size: "small",
                        disabled: o && d.value > 0 || t || l,
                        children: d.value > 0 ? we(d.value) : r.button.check
                    }) : n("div", {
                        class: j.done,
                        children: r.missions.done
                    })
                })]
            }), !s && o && d.value > 0 && n(I, {
                children: r.missions.erroe_message
            })]
        })
    })
}
  , Co = "_content_c1c79_1"
  , Je = {
    content: Co
}
  , Bo = ({confItem: e, item: t, onSubmit: i, disabled: s})=>{
    var _;
    const a = m(p)
      , [o,l] = f("")
      , g = ((_ = t == null ? void 0 : t.user_data) == null ? void 0 : _.solana_addr) || "";
    return n("div", {
        class: `${Je.content} ${s && Je.disable}`,
        children: [n(H, {
            children: e.name
        }), n("input", {
            type: "string",
            disabled: s,
            value: g,
            onChange: d=>l(d.currentTarget.value)
        }), n(k, {
            onClick: async()=>{
                if (e.type === "solana_addr" && o.length < 40)
                    return a.notification.showError("Invalid Solana address");
                await i(o)
            }
            ,
            size: "small",
            variant: "secondary",
            disabled: s,
            children: r.button.submit
        })]
    })
}
  , Ao = "_content_mpn7y_1"
  , ko = "_info_mpn7y_13"
  , et = {
    content: Ao,
    info: ko
}
  , So = e=>n("div", {
    class: et.content,
    children: [n("img", {
        src: be,
        alt: "coin"
    }), n("div", {
        class: et.info,
        children: [n(H, {
            children: r.missions.reward
        }), n(I, {
            children: b(e.reward)
        })]
    })]
})
  , xo = ({mConf: e})=>{
    const t = m(p)
      , [i,s] = f(t.account.getActiveMission(e.id))
      , a = t.player.claims.value.find(d=>d === e.id)
      , o = t.account.isMissionCompleted(e.id)
      , l = w(async(d,h)=>{
        try {
            const u = await t.api.missions_finishMissionItem.post({
                id: e.id,
                itemIndex: d,
                user_input: h
            });
            t.account.update(u.account),
            s(t.account.getActiveMission(e.id))
        } catch (u) {
            t.notification.showError(u.message)
        }
    }
    , [t.account, t.api.missions_finishMissionItem, t.notification, e.id])
      , g = async()=>{
        try {
            const d = await t.api.missions_finishMission.post({
                id: e.id
            });
            t.account.update(d.account),
            t.player.update(d.player),
            s(t.account.getActiveMission(e.id))
        } catch (d) {
            t.notification.showError(d.message)
        }
    }
      , _ = w(async()=>{
        await t.api.missions_joinMission.post({
            id: e.id
        }).then(d=>{
            t.account.update(d.account),
            s(t.account.getActiveMission(e.id))
        }
        ).catch(d=>{
            t.log.error(d)
        }
        )
    }
    , [t.account, t.api.missions_joinMission, t.log, e.id]);
    return n("div", {
        className: Pe.container,
        children: n("div", {
            class: Pe.content,
            children: [n(lt, {}), n(dt, {
                title: e.title,
                desc: e.description
            }), n(So, {
                reward: e.reward
            }), !i && !o && n(k, {
                variant: "secondary",
                size: "large",
                onClick: _,
                children: r.button.start_mission
            }), o && n("div", {
                className: Pe.completed,
                children: r.missions.completed
            }), n(M, {
                children: r.missions.your_task
            }), n(ie, {
                children: e.items.map((d,h)=>{
                    if (d.type === "wallet_connect")
                        return n(bo, {
                            item: i == null ? void 0 : i.items[h],
                            onSubmit: ()=>l(h),
                            disabled: !1,
                            claim: o
                        });
                    if (d.type !== "solana_addr") {
                        const v = (r.missions.individual_instrunctions[e.id] || [])[h];
                        return n(lo, {
                            confItem: e.items[h],
                            item: i == null ? void 0 : i.items[h],
                            disabled: !i && !o,
                            claim: o,
                            onSubmit: ()=>l(h),
                            instrunctions: v
                        })
                    }
                    return n(Bo, {
                        disabled: !i || !!((i == null ? void 0 : i.items[h]) !== void 0 && (i != null && i.items[h].verified)),
                        confItem: e.items[h],
                        item: i == null ? void 0 : i.items[h],
                        onSubmit: u=>l(h, u)
                    })
                }
                )
            }), i && n(k, {
                variant: "secondary",
                size: "large",
                onClick: g,
                disabled: !t.account.canFinishMission(e.id),
                children: r.button.finish_mission
            }), a && n(so, {
                missionConf: e
            })]
        })
    })
}
  , Lo = ()=>{
    var a, o;
    const e = m(p)
      , t = (a = e.navService.pageProps) != null && a.mission ? (o = e.navService.pageProps) == null ? void 0 : o.mission : null
      , [i,s] = f(t);
    return i ? n(xo, {
        mConf: i
    }) : n(ie, {
        children: e.account.availableMissions.concat(e.account.finishedMissions).map(l=>{
            const g = e.player.claims.value.find(d=>d === l.id) === l.id
              , _ = e.account.isMissionCompleted(l.id);
            return n(J, {
                name: l.title,
                img: Za,
                balance: l.reward,
                completed: !g && _,
                needAction: g,
                onClick: ()=>{
                    e.navService.regBackFunction(()=>s(null)),
                    s(l)
                }
            })
        }
        )
    })
}
  , To = "_listItem_c1rrx_1"
  , Io = "_listItemBody_c1rrx_9"
  , Eo = "_navigationBox_c1rrx_16"
  , Mo = "_percentageBox_c1rrx_22"
  , Do = "_reward_c1rrx_26"
  , me = {
    listItem: To,
    listItemBody: Io,
    navigationBox: Eo,
    percentageBox: Mo,
    reward: Do
}
  , Po = e=>n("div", {
    class: `${me.listItem}`,
    children: [n("div", {
        class: `${me.listItemBody}`,
        children: [n(Oe, {
            img: e.img,
            name: e.name,
            balance: e.reward
        }), n("div", {
            class: me.navigationBox,
            children: n(k, {
                variant: "primary",
                size: "small",
                onClick: e.onClaim,
                disabled: e.disabled,
                children: r.button.claim
            })
        })]
    }), e.percentage < 100 && n("div", {
        className: me.percentageBox,
        children: n(Xe, {
            currentEnergy: e.percentage
        })
    })]
})
  , tt = e=>n(ie, {
    children: e.tasks.map((t,i)=>n(Po, {
        name: t.title,
        reward: t.reward,
        img: t.image,
        percentage: t.percentage,
        disabled: !t.canClaim,
        onClaim: ()=>e.onClaim(t)
    }, i))
})
  , zo = ()=>{
    const e = m(p)
      , [t,i] = f(0)
      , s = w(()=>{
        const h = e.player.getClaimsByType("L");
        return e.gameConf.ligues.map((u,v)=>({
            taskId: `L${v}`,
            title: u.name,
            reward: u.reward,
            canClaim: h.includes(v),
            image: Be(u.name),
            percentage: u.score > 0 ? e.player.totalEarned * 100 / u.score : 0
        })).filter((u,v)=>h.includes(v) || v > e.player.ligue)
    }
    , [e.gameConf.ligues, e.player])
      , a = w(()=>{
        const h = e.player.getClaimsByType("R");
        return e.gameConf.ref_rewards.map((u,v)=>({
            taskId: `R${v}`,
            title: `Invite ${u.cnt} friends`,
            reward: u.reward,
            canClaim: h.includes(v),
            image: ct,
            cnt: u.cnt,
            percentage: e.player.stat.ref_cnt * 100 / u.cnt
        })).filter((u,v)=>h.includes(v) || e.player.stat.ref_cnt < u.cnt)
    }
    , [e.gameConf.ref_rewards, e.player])
      , [o,l] = f(s())
      , [g,_] = f(a())
      , d = w(async h=>{
        try {
            const u = await e.api.player_claimReward.post({
                task_id: h.taskId
            });
            if (e.player.update(u.player),
            h.taskId.startsWith("L")) {
                const v = s();
                l(v)
            } else {
                const v = a();
                _(v)
            }
            e.notification.showInfo("Done!")
        } catch (u) {
            e.log.error("player_claimReward", u),
            e.notification.showError("Error!")
        }
    }
    , [e.api.player_claimReward, e.log, e.notification, e.player, s, a]);
    return n(F, {
        children: [n(ht, {}), n(Ce, {}), n(Qa, {
            onTabChange: h=>{
                i(h),
                e.navService.clean()
            }
            ,
            activeTab: t,
            tabs: [{
                title: r.task.tabs.missions,
                tab: n(Lo, {}),
                taskAlert: e.player.getClaimsByType("M").length > 0 || e.account.availableMissions.length > 0
            }, {
                title: r.task.tabs.leagues,
                tab: n(tt, {
                    tasks: o,
                    onClaim: d
                }),
                taskAlert: o.find(h=>h.canClaim) !== void 0
            }, {
                title: r.task.tabs.ref_task,
                tab: n(tt, {
                    tasks: g,
                    onClaim: d
                }),
                taskAlert: g.find(h=>h.canClaim) !== void 0
            }]
        }), n(D, {
            compensator: !0,
            children: n(P, {})
        })]
    })
}
;
function Vo() {
    const e = m(p);
    return S(()=>{
        e.tapsSubmitService.submitTaps().catch(t=>e.log.error("submitTaps failed", t))
    }
    ),
    n(A, {
        children: n(zo, {})
    })
}
function Wo() {
    const e = m(p)
      , [t,i] = f(null)
      , [s,a] = f(null)
      , [o,l] = f(null)
      , [g,_] = f()
      , [d,h] = f()
      , u = w(()=>{
        if (e.localData.needWait || t)
            return;
        const se = e.getLoginParams();
        if (!se)
            return;
        const ae = ()=>{
            if (e.player.ligue < 2)
                return;
            const C = e.account.availableMissions.find(gt=>gt.id === "M0");
            C && h(C)
        }
        ;
        a(!1),
        e.api.account_login.post(se).then(C=>{
            if (C.wait_s) {
                e.localData.wait_until = y.addSeconds(y.now(), C.wait_s),
                e.localData.flush();
                return
            }
            e.login(C),
            i(C.player),
            _(e.player.notificationClaim),
            ae(),
            e.navService.setPage("taps")
        }
        ).catch(C=>{
            e.log.error("login_failed", C),
            C.status >= 500 && (e.localData.wait_until = y.addSeconds(y.now(), 10),
            e.localData.flush(),
            a(!0))
        }
        )
    }
    , [e, t])
      , v = w(()=>{
        if (Telegram.WebApp.expand(),
        e.initAppBot(),
        e.initLocalData(),
        e.navService.init(),
        Telegram.WebApp.setHeaderColor("#251F33"),
        Telegram.WebApp.setBackgroundColor("#251F33"),
        Telegram.WebApp.ready(),
        e.env === "prod" && !ei()) {
            l(!0);
            return
        }
        e.localData.needWait && a(!0)
    }
    , [e]);
    return S(()=>{
        v(),
        u()
    }
    ),
    o === !0 ? n(A, {
        page: "loading",
        children: n(nn, {})
    }) : s ? n(A, {
        page: "loading",
        children: [(e.env !== "prod" || e.debugEnabled) && n(Se, {}), n(Dn, {
            onReload: ()=>u()
        })]
    }) : t ? n(x, {
        children: [(e.env !== "prod" || e.debugEnabled) && n(Se, {}), e.navService.page === "taps" && n(Ga, {}), e.navService.page === "task" && n(Vo, {}), e.navService.page === "boost" && n(ks, {}), e.navService.page === "ligue" && n(js, {}), e.navService.page === "ref" && n(oa, {}), e.navService.page === "stat" && n(ga, {}), g && n(Jn, {
            notification: g,
            onClose: ()=>{
                _(void 0)
            }
        }), d && n(Tn, {
            mission: d,
            onClose: ()=>{
                h(void 0)
            }
        }), e.player.tappedBalance < 0 && n($n, {})]
    }) : n(A, {
        page: "loading",
        children: [(e.env !== "prod" || e.debugEnabled) && n(Se, {}), n(He, {})]
    })
}
function Ho() {
    return n(p.Provider, {
        value: nt,
        children: n(Wo, {})
    })
}
bt(n(Ho, {}), document.getElementById("app"));
//# sourceMappingURL=main-CwmaMSkC.js.map