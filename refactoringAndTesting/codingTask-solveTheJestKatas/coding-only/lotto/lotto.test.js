import { randomLottoTicket } from "./lotto";

describe("randomLottoTicket", function () {
  it("should return an array", function () {
    const lottoTicket = randomLottoTicket();
    expect(Array.isArray(lottoTicket)).toEqual(true);
  });

  it("should return an array containing 6 numbers", function () {
    const lottoTicket = randomLottoTicket();
    expect(Array.isArray(lottoTicket)).toEqual(true);
    expect(lottoTicket.length).toEqual(6);
  });

  it("should return an array containing 6 unique numbers", function () {
    const lottoTicket = randomLottoTicket();
    const numbers = new Set(lottoTicket);
    expect(numbers.size).toEqual(lottoTicket.length);
  });

  it("should return only numbers between (inclusive) 1 and 49", function () {
    const lottoTicket = randomLottoTicket();
    const lowest = Math.min(...lottoTicket);
    const highest = Math.max(...lottoTicket);
    expect(lowest).toBeGreaterThan(0);
    expect(highest).toBeLessThan(50);
  });

  it("should return random numbers", function () {
    const lottoTicket = randomLottoTicket();
    const lottoTicket2 = randomLottoTicket();
    const lottoTicketStr = lottoTicket.sort((a, b) => a - b).join("");
    const lottoTicket2Str = lottoTicket2.sort((a, b) => a - b).join("");
    expect(lottoTicketStr === lottoTicket2Str).toEqual(false);
  });
});
