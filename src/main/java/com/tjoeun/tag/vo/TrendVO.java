package com.tjoeun.tag.vo;

import java.util.Date;

public class TrendVO {
	private String title;
	private String maintext;
	private String tag;
	private int tnum;
	private String writer;
	private int lnum;
	private int usernum;
	private int views;
	private Date tdate;
	private int ccount;
	private boolean slide;
	private boolean images;
	
	public TrendVO() {	}

	public TrendVO(String title, String maintext, String tag, int tnum, String writer, int lnum, int usernum, int views,
			Date tdate, int ccount, boolean slide, boolean images) {
		super();
		this.title = title;
		this.maintext = maintext;
		this.tag = tag;
		this.tnum = tnum;
		this.writer = writer;
		this.lnum = lnum;
		this.usernum = usernum;
		this.views = views;
		this.tdate = tdate;
		this.ccount = ccount;
		this.slide = slide;
		this.images = images;
	}

	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getMaintext() {
		return maintext;
	}
	public void setMaintext(String maintext) {
		this.maintext = maintext;
	}
	public String getTag() {
		return tag;
	}
	public void setTag(String tag) {
		this.tag = tag;
	}
	public int getTnum() {
		return tnum;
	}
	public void setTnum(int tnum) {
		this.tnum = tnum;
	}
	public String getWriter() {
		return writer;
	}
	public void setWriter(String writer) {
		this.writer = writer;
	}
	public int getLnum() {
		return lnum;
	}
	public void setLnum(int lnum) {
		this.lnum = lnum;
	}
	public int getUsernum() {
		return usernum;
	}
	public void setUsernum(int usernum) {
		this.usernum = usernum;
	}
	public int getViews() {
		return views;
	}
	public void setViews(int views) {
		this.views = views;
	}
	public Date getTdate() {
		return tdate;
	}
	public void setTdate(Date tdate) {
		this.tdate = tdate;
	}
	public int getCcount() {
		return ccount;
	}
	public void setCcount(int ccount) {
		this.ccount = ccount;
	}
	public boolean isSlide() {
		return slide;
	}
	public void setSlide(boolean slide) {
		this.slide = slide;
	}
	public boolean isImages() {
		return images;
	}
	public void setImages(boolean images) {
		this.images = images;
	}

	@Override
	public String toString() {
		return "TrendVO [title=" + title + ", maintext=" + maintext + ", tag=" + tag + ", tnum=" + tnum + ", writer="
				+ writer + ", lnum=" + lnum + ", usernum=" + usernum + ", views=" + views + ", tdate=" + tdate
				+ ", ccount=" + ccount + ", slide=" + slide + ", images=" + images + "]";
	}

}
