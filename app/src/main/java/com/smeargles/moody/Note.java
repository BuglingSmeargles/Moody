package com.smeargles.moody;

import android.content.Context;
import android.icu.text.SimpleDateFormat;
import android.icu.util.TimeZone;

import java.util.Date;

/**
 * Created by TiffanyLee on 1/22/17.
 */

public class Note {
    private long nDateTime;
    private String nTitle;
    private String nContent;

    public Note(String content, long dateTime, String title){
        nContent = content;
        nDateTime = dateTime;
        nTitle = title;

    }


    public long getnDateTime() {
        return nDateTime;
    }

    public void setnDateTime(long nDateTime) {
        this.nDateTime = nDateTime;
    }

    public String getnTitle() {
        return nTitle;
    }

    public void setnTitle(String nTitle) {
        this.nTitle = nTitle;
    }

    public String getnContent() {
        return nContent;
    }

    public void setnContent(String nContent) {
        this.nContent = nContent;
    }

    public String getDateTimeFormatted(Context context){
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy",
                context.getResources().getConfiguration().locale);
        sdf.setTimeZone(TimeZone.getDefault());
        return sdf.format(new Date(nDateTime));




    }
}
